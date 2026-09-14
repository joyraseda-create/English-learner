# 阅读理解 - 题型策略引导（原型）

**日期**: 2026-09-14
**范围**: 原型（仅 1 篇文章），验证可行后批量推广

## 目标

为阅读理解模块增加"题型分类策略引导"——在用户做完题后，可选择查看该题的做题策略，帮助用户从"凭感觉答题"变成"按方法答题"。

## 设计原则

1. **不剧透答案** —— 答题前不显示策略
2. **不指责用户** —— 答对也显示入口（不是只有答错才看）
3. **用户主动选择** —— 默认折叠，避免信息过载
4. **错误时给帮助** —— 答错时在本篇文章内首次自动展开（只展一次）

## 题型分类（5 类）

| type | 中文 | 颜色 | 识别线索 |
|------|------|------|----------|
| `detail` | 细节 | 蓝 (sky) | 选项与原文有同义替换；问 when/where/who/what/how many |
| `main` | 主旨 | 绿 (emerald) | 题干含 mainly about / best title / main idea / purpose |
| `infer` | 推断 | 紫 (indigo) | 题干含 infer / suggest / imply / can we conclude / probably |
| `vocab` | 猜词 | 橙 (amber) | 题干含 means / refers to / the word … means |
| `attitude` | 态度 | 玫红 (rose) | 题干含 author's attitude / tone / feel about / view on |

## 数据模型

```ts
// src/pages/Reading/readingData.ts
export type QuestionType = 'detail' | 'main' | 'infer' | 'vocab' | 'attitude'

export type ReadingQuestion = {
  id: string
  question: string
  options: string[]
  answer: number
  explanation: string
  type?: QuestionType  // 新增可选字段；缺省时由 classifyQuestion 启发式推断
}
```

**向后兼容**：旧题无 `type` 字段，UI 层 `classifyQuestion(q)` 根据题干关键词推断（fallback = `detail`）。

## 策略卡片数据

新增 `src/pages/Reading/strategyData.ts`：

```ts
export const strategyData: Record<QuestionType, {
  label: string           // "细节理解"
  color: string           // "sky"
  clue: string            // "问 when/where/who/what 等具体信息"
  steps: string[]         // 3 步方法
  pitfall: string         // 1 句常见错误
}> = {
  detail: {
    label: '细节理解',
    color: 'sky',
    clue: '选项与原文有同义替换，题干预告 when / where / who / what / how many 等具体信息。',
    steps: [
      '回原文定位关键词（时间、人名、数字）',
      '找选项的同义替换，避开"原词照搬"',
      '排除无关信息与反向选项',
    ],
    pitfall: '不要凭印象选，必须回到原文对应位置核对。',
  },
  main: { /* … */ },
  infer: { /* … */ },
  vocab: { /* … */ },
  attitude: { /* … */ },
}

export function classifyQuestion(q: ReadingQuestion): QuestionType { /* 启发式 */ }
```

## UI 改动

### A. 题目卡片（在 `index.tsx` 现有题目卡片内）

**题号前加色块徽章**（始终显示）：

```tsx
<span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${badgeClass(type)}`}>
  {strategyData[type].label}
</span>
```

### B. 答题后追加策略卡片（默认折叠）

紧跟在现有紫色解析框下方：

```tsx
{isAnswered && (
  <StrategyHint
    type={type}
    autoOpen={isWrong && firstWrongOfTypeInArticle}  // 仅本篇内首次答错该题型时自动展开
  />
)}
```

### C. StrategyHint 组件行为

- 默认显示按钮：`💡 查看做题策略 ▶`（小型，amber 主题色）
- 点击展开 → 内部显示：识别线索 + 3 步方法 + 常见错误
- 再次点击 → 折叠
- `autoOpen=true` 时首次渲染即展开（用户可手动折叠）
- 状态是组件内部的 `useState`，不持久化到 localStorage（避免跨文章意外展开）

## 原型范围

- **选文**：`read-lv1-01` "My Happy Family"（4 道题覆盖 detail × 2、main × 1、infer × 1、attitude × 1）
- **数据改动**：仅 `data/level1.ts` 第 1 篇的 4 道题各加 `type` 字段
- **新增文件**：
  - `src/pages/Reading/strategyData.ts`（策略数据 + 启发式分类函数）
  - `src/pages/Reading/components/StrategyHint.tsx`（UI 组件）
- **改动文件**：
  - `src/pages/Reading/readingData.ts`（加 `QuestionType` 类型 + `ReadingQuestion.type?`）
  - `src/pages/Reading/index.tsx`（在题目卡片内挂徽章 + StrategyHint）
- **不批量**：其他 149 篇文章暂不加 `type` 字段，原型验证后再批量

## 验收标准

打开 `http://localhost:5175/reading` → 切到"初级" → 文章 1，验证：

1. ✅ 4 道题题号前各有一个不同色的小徽章
2. ✅ 答完任一道题后，解析框下方出现"💡 查看做题策略"按钮
3. ✅ 主动点击按钮可展开/折叠，展开后显示该题型的策略内容
4. ✅ 故意答错一道题 → 该篇文章内首次答错该题型时策略自动展开
5. ✅ 答对时策略保持折叠（不自动展开）
6. ✅ 切换到其他文章再切回，原展开状态不保留（组件内部 useState，不持久化）
7. ✅ 控制台无 error/warn（Vite HMR 信息除外）

## 不在原型范围

- 其他 149 篇文章批量打 `type` 标签（等原型验证后再说）
- 阅读策略的"题前提示"或"文章顶部总结"
- 跨文章/跨 session 的策略学习记录
- 不同 level（lv1/2/3）的策略差异化

## 风险与缓解

| 风险 | 缓解 |
|------|------|
| 启发式分类不准确 | 仅用于 fallback；标注题覆盖则用标注结果 |
| 颜色与现有 UI 冲突 | 用 Tailwind 已有色板（sky/emerald/indigo/amber/rose），与现有徽章系统一致 |
| 策略文案过长撑高卡片 | 每题型策略 ≤ 5 行；用折叠交互 |
| React 18 batch + useState 自动展开 | 用 `useState(true)` + 手动折叠，逻辑简单 |

## 后续推广（原型验证后）

1. 写脚本批量给 150 篇文章加 `type`（基于关键词 + 人工抽检）
2. 收集用户使用数据（哪种题型错得最多 → 调整策略优先级）
3. 跨模块串联：阅读做错的推断题 → 推送到 Grammar 模块的"虚拟语气"复习
