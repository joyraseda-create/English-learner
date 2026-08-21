# 语法模块 Bug 检查报告

检查范围：`src/pages/Grammar/` 目录下 5 个核心文件

---

## 严重 Bug（7 个）

### 【严重-1】随机模式下每次提交答案都会重新洗牌
- **文件**：`GrammarExercises.tsx`
- **位置**：第 154-167 行 `exercises` useMemo
- **问题描述**：
  `exercises` 的依赖项包含 `wrongKeysSet`，而 `wrongKeysSet` 依赖 `submitted` 状态。每次提交答案时 `submitted` 变化 → `wrongKeysSet` 重新计算（返回新 Set 引用）→ `exercises` useMemo 重新执行 → `shuffleArray` 被调用。导致在随机模式下，每做一道题整个列表顺序就会打乱一次，用户位置丢失。
- **复现方式**：
  1. 切换到"随机"模式
  2. 提交第一道题的答案
  3. 观察第二道题变成了完全不同的题目（列表已重新洗牌）
- **修复建议**：
  随机顺序应由 `shuffleTick` 唯一控制，将 `wrongKeysSet` 从依赖中移除，或使用 ref 缓存 wrong keys 避免触发重计算。

```tsx
// 修复方案：使用 ref 存储 wrong keys，仅在需要时手动更新
const wrongKeysRef = useRef<Set<string>>(new Set())

useEffect(() => {
  const wrongList = getWrongQuestionList()
  const set = new Set<string>()
  wrongList.forEach((wq) => {
    const match = grammarExercises.find(
      (ex) => ex.lessonId === wq.lessonId && ex.question === wq.question,
    )
    if (match) {
      const key = `${match.lessonId}-${grammarExercises.indexOf(match)}`
      set.add(key)
    }
  })
  wrongKeysRef.current = set
}, [submitted])

// exercises 中使用 wrongKeysRef.current 而非 wrongKeysSet
```

---

### 【严重-2】`resetAllAnswers` 不重置 stats，导致数据不一致
- **文件**：`grammarProgress.ts`
- **位置**：第 81-91 行 `resetAllAnswers` 函数
- **问题描述**：
  `resetAllAnswers()` 重置了 answers、wrong questions 和 lesson progress，但没有重置 `stats`（`totalExercisesDone`、`totalCorrect`、`studyDays` 等）。重置后统计数据与实际答题记录完全脱节。
- **复现方式**：
  1. 做几道练习题
  2. 点击"重置"按钮
  3. 答题记录清空，但累计统计数据（总做题数、总正确数等）仍然保留
- **修复建议**：
  在 `resetAllAnswers` 中同时重置 stats。

```typescript
export function resetAllAnswers() {
  localStorage.setItem(answersKey, '{}')
  localStorage.setItem(wrongKey, '{}')
  localStorage.setItem(statsKey, JSON.stringify(defaultStats())) // 新增
  const lessons = getAllLessonProgress()
  Object.keys(lessons).forEach((id) => {
    lessons[id].correctCount = 0
    lessons[id].completed = false
  })
  localStorage.setItem(lessonsKey, JSON.stringify(lessons))
}
```

---

### 【严重-3】`exerciseKeyMap` 使用对象引用作为 Map key，脆弱且不可靠
- **文件**：`GrammarExercises.tsx`
- **位置**：第 72-83 行
- **问题描述**：
  `exerciseKeyMap` 使用 `GrammarExercise` 对象引用作为 Map 的 key。虽然当前 `grammarExercises` 是静态数组引用稳定，但：
  1. `wrongKeysSet` 中通过 `lessonId + question` 查找匹配后再用 `indexOf` 获取索引，与 `exerciseKeyMap` 的 key 生成逻辑不一致（两处独立计算）
  2. 同一 lesson 内如果有两道题干完全相同的题目（type 不同），错题匹配会出错
  3. 如果练习数据改为动态加载或重新生成，所有 key 映射都会失效
- **复现方式**：
  在 `exerciseData` 中为同一 lesson 添加两道题干相同但类型不同的题目，错题匹配会关联到错误的题目。
- **修复建议**：
  为每道练习题添加唯一 `id` 字段，替代基于索引的 key 生成方案。

```typescript
// 在 GrammarExercise 类型中添加 id
export type GrammarExercise = {
  id: string  // 新增
  lessonId: string
  // ... 其他字段
}

// 使用 ex.id 作为 key
const getKey = useCallback((ex: GrammarExercise) => ex.id, [])
```

---

### 【严重-4】删除当前正在查看的 PDF 后，状态不一致
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 145-149 行 `handleDelete`
- **问题描述**：
  用户删除当前正在查看的 PDF 后，`selectedUrl`、`selectedName`、`currentPage`、`blobUrlRef` 仍然引用已删除的 PDF。iframe 继续显示该 PDF（因为 blob URL 仍有效），但列表中已消失。同时 blob URL 未被释放，造成内存泄漏。
- **复现方式**：
  1. 上传一个 PDF 并打开查看
  2. 点击该 PDF 上的删除按钮并确认
  3. 列表中 PDF 消失，但 iframe 中仍然显示该 PDF
- **修复建议**：
  删除时如果是当前查看的 PDF，清空相关状态并释放 blob URL。

```typescript
const handleDelete = async (id: string, name: string) => {
  if (!window.confirm(`确定要删除 "${name}" 吗？`)) return
  await deletePdf(id)
  // 如果删除的是当前查看的 PDF，清空状态
  if (selectedName === name) {
    revokeBlob()
    setSelectedUrl(null)
    setSelectedName('')
    setCurrentPage(1)
    setPageInput('1')
  }
  await loadPdfs()
}
```

---

### 【严重-5】拖拽侧边栏时事件监听器频繁销毁重建
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 167-189 行拖拽相关 useEffect
- **问题描述**：
  useEffect 的依赖项是 `sidebarWidth`，在拖拽过程中 `sidebarWidth` 每变化一像素就会触发一次 effect 重新执行，导致 `mousemove` 和 `mouseup` 事件监听器被不断移除和重新添加。这在拖拽过程中会产生严重的性能问题，并且可能因闭包陷阱导致 `onMouseUp` 读取到旧的 `sidebarWidth` 值。
- **复现方式**：
  拖拽侧边栏调整宽度，在 DevTools 中观察事件监听器变化，或在慢速设备上体验拖拽卡顿。
- **修复建议**：
  使用 ref 存储 sidebarWidth 的最新值，effect 不依赖 sidebarWidth。

```typescript
const sidebarWidthRef = useRef(sidebarWidth)
useEffect(() => { sidebarWidthRef.current = sidebarWidth }, [sidebarWidth])

useEffect(() => {
  const onMouseMove = (e: MouseEvent) => {
    if (!draggingRef.current || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const newWidth = e.clientX - rect.left
    const clamped = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, newWidth))
    setSidebarWidth(clamped)
  }
  const onMouseUp = () => {
    if (draggingRef.current) {
      draggingRef.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      localStorage.setItem(STORAGE_KEY, String(sidebarWidthRef.current))
    }
  }
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  return () => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }
}, []) // 空依赖
```

---

### 【严重-6】IndexedDB 连接从不关闭，造成连接泄漏
- **文件**：`pdfStore.ts`
- **位置**：第 13-25 行 `openDB` 函数
- **问题描述**：
  每次调用 `getAllPdfs`、`addPdf`、`deletePdf` 都会新建一个数据库连接（调用 `openDB()`），且这些连接从未被关闭。长期使用会累积大量空闲数据库连接，可能导致浏览器资源耗尽或 IndexedDB 报错。
- **复现方式**：
  多次上传/删除 PDF，在 DevTools → Application → IndexedDB 中观察连接数持续增长。
- **修复建议**：
  使用单例模式缓存数据库连接。

```typescript
let dbPromise: Promise<IDBDatabase> | null = null

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
    request.onsuccess = () => {
      const db = request.result
      db.onclose = () => { dbPromise = null }
      db.onerror = () => { dbPromise = null }
      resolve(db)
    }
    request.onerror = () => {
      dbPromise = null
      reject(request.error)
    }
  })
  return dbPromise
}
```

---

### 【严重-7】`updateLessonProgress` 中 `exerciseCount` 初始化为 0，进度数据失真
- **文件**：`grammarProgress.ts`
- **位置**：第 185-203 行 `updateLessonProgress` 函数
- **问题描述**：
  如果用户直接进入练习页面做题而没有先在课程页面查看课程，`updateLessonProgress` 会创建一条 `exerciseCount: 0` 的记录。后续 `correctCount` 不断增加但 `exerciseCount` 始终为 0，导致进度百分比计算时 `correctEx / totalEx` 中 `totalEx` 为 0。虽然 UI 层有 `totalEx > 0` 的保护（显示 0%），但存储的数据本身是不一致的。
- **复现方式**：
  1. 清空 localStorage
  2. 直接进入"语法练习"标签页做题
  3. 切换到"语法课程"标签页，查看刚做过题的课程进度，显示为 0/0（0%）
- **修复建议**：
  在 `updateLessonProgress` 中，如果 lesson 不存在，应根据 `lessonId` 查找正确的练习数量。或在练习题首次提交时也调用 `markLessonViewed` 初始化正确的 `exerciseCount`。

---

## 一般 Bug（11 个）

### 【一般-1】`getWrongInfo` 每次渲染都重复读取 localStorage 并解析
- **文件**：`GrammarExercises.tsx`
- **位置**：第 193-203 行 `getWrongInfo`，在第 485 行 map 中被调用
- **问题描述**：
  `getWrongInfo` 在每道题的渲染中都会被调用，每次调用都执行 `getWrongQuestionList()` → `JSON.parse(localStorage.getItem(...))`。当练习列表有几十上百道题时，每次渲染都会进行数十次 localStorage 读取和 JSON 解析，严重影响性能。
- **复现方式**：
  在大量练习题页面滚动，用 React DevTools Profiler 观察渲染性能。
- **修复建议**：
  将 wrong question list 提升为 state 或 useMemo，`getWrongInfo` 从缓存中查找。

```tsx
const wrongQuestionMap = useMemo(() => {
  const map = new Map<string, WrongQuestion>()
  getWrongQuestionList().forEach((wq) => {
    const match = grammarExercises.find(
      (ex) => ex.lessonId === wq.lessonId && ex.question === wq.question,
    )
    if (match) {
      const key = `${match.lessonId}-${grammarExercises.indexOf(match)}`
      map.set(key, wq)
    }
  })
  return map
}, [submitted])
```

---

### 【一般-2】`addWrongQuestion` 对新错题不做任何处理，依赖外部补全，设计脆弱
- **文件**：`grammarProgress.ts`
- **位置**：第 111-126 行 `addWrongQuestion` 函数
- **问题描述**：
  当遇到新错题时，`addWrongQuestion` 的 `if (all[exerciseId])` 条件不满足，函数什么都不做就保存了（空的）错题列表。注释说"component will call setWrongQuestionDetail with full data"，但这是一种脆弱的隐式约定。如果调用顺序变化、`setWrongQuestionDetail` 调用被遗漏，或者未来有人重构代码，新错题将永远不会被记录。
- **复现方式**：
  代码审查即可发现，需追踪 `saveAnswer` → `addWrongQuestion` → `setWrongQuestionDetail` 的调用链。
- **修复建议**：
  在 `addWrongQuestion` 中就创建错题记录（最少信息），`setWrongQuestionDetail` 负责补全详情。或直接将完整信息传入 `saveAnswer`。

---

### 【一般-3】completed 状态不一致：存储的 completed 与 UI 计算的 completed 不匹配
- **文件**：`grammarProgress.ts` + `index.tsx`
- **位置**：`markLessonCompleted` 从未被调用；UI 中 `isCompleted` 用 `correctEx >= totalEx` 计算
- **问题描述**：
  `grammarProgress.ts` 中定义了 `markLessonCompleted` 函数和 `completed` 字段，但整个代码库中从未调用过 `markLessonCompleted`。UI 层的 `isCompleted` 是通过 `correctEx >= totalEx` 实时计算的，与存储的 `completed` 字段无关。导致：
  1. `completed` 字段永远是 `false`（初始值）
  2. `continueLesson` 用 `!p.completed` 筛选，永远筛选不出已完成的课，但 UI 上显示的"已完成"课程可能被错误地放在"继续学习"中
- **复现方式**：
  1. 完成某课程的所有练习题（全部做对）
  2. 课程列表中显示"已完成"
  3. 但"继续学习"卡片中可能仍然显示这门课（取决于 `completed` 字段是否为 false）
- **修复建议**：
  在 `updateLessonProgress` 中，当 `correctCount >= exerciseCount` 时自动设置 `completed = true`。

---

### 【一般-4】`continueLesson` 筛选逻辑与 UI 完成状态判断不一致
- **文件**：`index.tsx`
- **位置**：第 194-202 行 `continueLesson`
- **问题描述**：
  `continueLesson` 使用 `!p.completed` 筛选进行中的课程，但 UI 中 `isCompleted` 的判断是 `progress?.completed || (totalEx > 0 && correctEx >= totalEx)`。这意味着一门课可能在 UI 上显示为"已完成"（因为 correctEx >= totalEx），但仍然出现在"继续学习"卡片中（因为 p.completed 为 false）。
- **复现方式**：
  完成某课程全部练习题后，观察课程列表显示"已完成"，但"继续学习"卡片仍显示该课程。
- **修复建议**：
  统一完成状态判断逻辑，将 completed 的判断也考虑 correctCount/exerciseCount。

---

### 【一般-5】多文件上传时，只显示最后一个错误
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 104-121 行 `handleUpload`
- **问题描述**：
  当用户同时上传多个文件且有多个文件验证失败时，`setUploadError` 每次覆盖前一个错误，最终只显示最后一个失败文件的错误信息，用户无法知道哪些文件失败了。
- **复现方式**：
  1. 点击"上传 PDF"
  2. 同时选择一个非 PDF 文件和一个超过 100MB 的文件
  3. 只显示最后一个文件的错误
- **修复建议**：
  收集所有错误后统一显示。

```typescript
const errors: string[] = []
for (const file of Array.from(files)) {
  if (file.type !== 'application/pdf') {
    errors.push(`${file.name} 不是 PDF 文件`)
    continue
  }
  if (file.size > MAX_UPLOAD_SIZE) {
    errors.push(`${file.name} 超过 100MB 大小限制`)
    continue
  }
  try {
    await addPdf(file)
  } catch (e) {
    errors.push(`${file.name} 上传失败`)
  }
}
if (errors.length > 0) {
  setUploadError(errors.join('\n'))
}
```

---

### 【一般-6】上传 PDF 失败时无错误捕获
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 117 行 `await addPdf(file)`
- **问题描述**：
  `addPdf` 可能因 IndexedDB 配额超限、磁盘空间不足等原因失败，但 `handleUpload` 中没有 try-catch，会导致未捕获的 Promise rejection，页面上也没有任何提示。
- **复现方式**：
  上传一个极大的 PDF 文件（接近浏览器存储配额），上传失败后控制台报错但用户无感知。
- **修复建议**：
  用 try-catch 包裹 `addPdf` 调用，捕获错误并显示给用户。

---

### 【一般-7】页面切换时进度数据不刷新，显示滞后
- **文件**：`index.tsx`
- **位置**：第 164-167 行 useEffect
- **问题描述**：
  进度数据只在 `tab` 变化时重新加载。用户在"语法练习"标签页做了题后，切换到"语法课程"标签页才能看到进度更新。虽然 useEffect 依赖 `tab` 实现了切换时刷新，但如果用户一直在练习标签页，课程标签页的进度数据是旧的——不过这其实不是大问题，因为看不到。真正的问题是：在课程标签页点击"开始练习"切换到练习标签页时，练习进度的显示可能有延迟（因为是从 localStorage 重新读取）。
- **复现方式**：
  在练习标签页做题 → 切换到课程标签页 → 进度条需要等 tab 切换 effect 执行后才更新。
- **修复建议**：
  使用全局状态管理（如 Context 或 Zustand）共享进度数据，或在练习完成时通过事件通知刷新。

---

### 【一般-8】快捷键 Enter 在选择题焦点不在输入框时也会触发提交
- **文件**：`GrammarExercises.tsx`
- **位置**：第 282-299 行 Enter 快捷键
- **问题描述**：
  Enter 快捷键设置了 `enableOnFormTags: false`，即不在表单元素上时才触发。但选择题没有输入框，用户可能在页面其他地方（如侧边栏筛选按钮）按 Enter 键，意外触发第一道未提交题目的提交。如果用户还没选答案，`!userAnswer.trim()` 会阻止提交，这没问题；但如果已经选了答案，按 Enter 就会意外提交。
- **复现方式**：
  1. 在第一道选择题上选一个答案
  2. 点击侧边栏的某个按钮使其获得焦点
  3. 按 Enter 键 → 题目被提交
- **修复建议**：
  增加更严格的触发条件，比如只有当练习区域被交互过（最近点击过题目区域）才启用快捷键，或使用 `enableOnTags` 精确控制。

---

### 【一般-9】选择题 `showCorrect` 与 `isCorrect` 判断逻辑不一致
- **文件**：`GrammarExercises.tsx`
- **位置**：第 519 行 `showCorrect = isSubmitted && opt === ex.answer` 对比第 36 行 `isCorrect` 函数
- **问题描述**：
  选项正确与否的显示使用了 `opt === ex.answer`（精确字符串匹配），而 `isCorrect` 函数使用了 `normalize` 后按 `/` 分割的多答案匹配。两者逻辑不一致：
  - 如果正确答案包含 `/`（表示多个可接受答案），`showCorrect` 只会高亮完全匹配的那个选项
  - 虽然当前选择题答案不含 `/`，但代码设计上存在隐患
- **修复建议**：
  统一使用 `isCorrect` 函数判断选项是否正确，或确保选择题答案不会出现多答案分隔符。

---

### 【一般-10】stats 栏中错题数显示全局错题数而非当前筛选的
- **文件**：`GrammarExercises.tsx`
- **位置**：第 411-414 行
- **问题描述**：
  统计栏显示"错题 X 道"使用的是全局错题数 `wrongCount`，而非当前筛选条件下（级别/课程/模式）的错题数。用户筛选特定课程后，看到的错题数可能远大于当前题目总数，造成困惑。
- **复现方式**：
  1. 切换到某个只有 5 道题的课程
  2. 统计栏显示"错题 20 道"（全局错题数）
- **修复建议**：
  计算并显示当前筛选列表中的错题数。

```tsx
const currentWrongCount = useMemo(() => {
  return exercises.filter((ex) => wrongKeysSet.has(getKey(ex))).length
}, [exercises, wrongKeysSet, getKey])
```

---

### 【一般-11】`handleLevelChange` 中找不到匹配课程时 `selectedLessonId` 不变
- **文件**：`index.tsx`
- **位置**：第 204-209 行
- **问题描述**：
  如果切换级别后找不到该级别的第一门课（`first` 为 undefined），`selectedLessonId` 保持原值，但该课程可能不在当前筛选列表中，导致选中状态与显示内容不匹配。
- **复现方式**：
  虽然当前数据不会出现，但如果某个级别没有课程，就会复现。
- **修复建议**：
  找不到匹配时回退到筛选列表中的第一个，或全部课程的第一个。

---

## 轻微 Bug / 代码质量问题（10 个）

### 【轻微-1】`firstUnsubmittedRef` 声明但从未使用
- **文件**：`GrammarExercises.tsx`
- **位置**：第 69 行
- **问题描述**：
  `firstUnsubmittedRef` 被创建并通过 `ref` 属性绑定到第一个未提交题目的 div 上，但从未被使用（如滚动定位、focus 等）。属于死代码。
- **修复建议**：
  删除该 ref，或实现自动滚动到第一道未做题目功能。

---

### 【轻微-2】`showResult` 状态从未被使用
- **文件**：`GrammarExercises.tsx`
- **位置**：第 57 行
- **问题描述**：
  `showResult` state 在初始加载和提交答案时被设置为 true，但 JSX 中完全没有使用它。属于死代码。
- **修复建议**：
  删除 `showResult` 状态变量及相关设置。

---

### 【轻微-3】`getPdfProgress` 返回类型与实际存储结构不一致
- **文件**：`grammarProgress.ts`
- **位置**：第 265-272 行 `getPdfProgress`
- **问题描述**：
  `getPdfProgress` 返回类型声明为 `{ page: number } | null`，但 `savePdfProgress` 实际存储的是 `{ page, updatedAt: Date.now() }`。TypeScript 类型不完整，调用方无法获取 `updatedAt`。
- **修复建议**：
  修正返回类型。

```typescript
export function getPdfProgress(name: string): { page: number; updatedAt: number } | null {
```

---

### 【轻微-4】localStorage 写入操作缺少 try-catch 保护
- **文件**：`grammarProgress.ts`
- **位置**：`saveAnswer`、`updateStats`、`updateLessonProgress`、`markLessonViewed` 等
- **问题描述**：
  读取操作都有 try-catch（读取失败返回默认值），但写入操作大多没有。如果 localStorage 禁用或配额已满，写入会抛出异常导致页面崩溃。`savePdfProgress` 有 try-catch 但其他函数没有，不一致。
- **修复建议**：
  为所有 localStorage 写入操作添加 try-catch。

---

### 【轻微-5】`zoom === 0` 表示"适合宽度"，语义不清晰
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 75 行等多处
- **问题描述**：
  使用 `zoom === 0` 作为"适合宽度"模式的哨兵值，语义模糊。0% 缩放通常意味着"看不见"，而非"适合宽度"。容易让维护者困惑。
- **修复建议**：
  使用特殊值如 `null` 或 `-1`，或增加单独的 `fitWidth` 状态变量。

---

### 【轻微-6】iframe `onError` 对 PDF 加载失败可能不触发
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 301 行
- **问题描述**：
  iframe 的 `onError` 事件主要在 iframe 资源完全无法加载（如 404、网络错误）时触发。对于 PDF 文件损坏、格式错误等情况，浏览器内置 PDF 阅读器可能显示自己的错误页面但不会触发 iframe 的 `onError`，导致 `pdfError` 始终为 false，用户看到的是浏览器的错误页面而非应用内的友好提示。
- **修复建议**：
  使用 PDF.js 渲染 PDF 可以获得更可靠的错误检测。或增加超时检测机制。

---

### 【轻微-7】`addPdf` 的 id 生成方式存在碰撞风险
- **文件**：`pdfStore.ts`
- **位置**：第 41 行
- **问题描述**：
  `id: \`${Date.now()}-${Math.random().toString(36).slice(2)}\`` 使用时间戳+随机数生成 ID。虽然碰撞概率极低，但在高并发场景（或同一毫秒内多次上传）下理论上存在碰撞可能。
- **修复建议**：
  使用 `crypto.randomUUID()`（现代浏览器支持）或更可靠的 UUID 生成方案。

---

### 【轻微-8】IndexedDB 无降级方案
- **文件**：`pdfStore.ts`
- **问题描述**：
  如果 IndexedDB 不可用（如 Safari 隐私浏览模式），所有 PDF 上传功能都会失败，且没有友好的错误提示。
- **修复建议**：
  检测 IndexedDB 可用性，不可用时显示提示信息并禁用上传功能。

---

### 【轻微-9】页码输入没有最大页数限制
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 339-363 行页码输入框
- **问题描述**：
  用户可以输入任意大的页码，超过 PDF 实际页数后 PDF 阅读器可能显示空白或跳转到最后一页，缺乏友好的边界处理。
- **修复建议**：
  如果能获取 PDF 总页数（需使用 PDF.js），则对输入进行限制。否则至少在输入超大页码时给出提示。

---

### 【轻微-10】适合宽度模式下缩放按钮禁用，但"恢复 100%"按钮仍可用
- **文件**：`ReferenceBooks.tsx`
- **位置**：第 378-415 行缩放工具栏
- **问题描述**：
  在"适合宽度"模式（zoom === 0）下，放大/缩小按钮被禁用，但"恢复 100%"按钮仍可用。用户可能期望点击适合宽度按钮可以切换回之前的缩放比例，但实际上需要点击"恢复100%"，交互不一致。
- **修复建议**：
  让适合宽度按钮具有切换功能，点击后恢复到之前的缩放级别。

---

## 总结

| 严重程度 | 数量 |
|---------|------|
| 严重     | 7    |
| 一般     | 11   |
| 轻微     | 10   |
| **总计** | **28** |

**最优先修复的 3 个严重 Bug：**
1. 随机模式下每次提交答案都会重新洗牌（用户体验严重受损）
2. `resetAllAnswers` 不重置 stats（数据一致性问题）
3. 删除当前 PDF 后状态不一致（数据安全 + 内存泄漏）
