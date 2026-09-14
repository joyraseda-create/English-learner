import Layout from '../../components/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import IconCheck from '~icons/tabler/check'
import IconX from '~icons/tabler/x'
import IconArrowRight from '~icons/tabler/arrow-right'
import IconArrowLeft from '~icons/tabler/arrow-left'
import IconBook from '~icons/tabler/book'
import IconInfoCircle from '~icons/tabler/info-circle'
import IconBulb from '~icons/tabler/bulb'
import IconBookmark from '~icons/tabler/bookmark'
import IconChevronDown from '~icons/tabler/chevron-down'
import IconFilter from '~icons/tabler/filter'
import IconCategory from '~icons/tabler/category'
import IconPlayerPlay from '~icons/tabler/player-play'
import IconClock from '~icons/tabler/clock'
import { NavLink } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { readingCategories, readingData, readingLevels } from './readingData'
import type { ReadingItem } from './readingData'
import SpeakerButton from './SpeakerButton'
import StrategyHint from './components/StrategyHint'
import { classifyQuestion, getColorClasses, strategyData } from './strategyData'
import '../a-minimal-global.css'

const PROGRESS_KEY = 'el-reading-progress'
const RATE_KEY = 'el-reading-rate'

type Progress = {
  completed: string[]
  wrong: { itemId: string; questionId: string }[]
}

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        completed: Array.isArray(parsed.completed) ? parsed.completed : [],
        wrong: Array.isArray(parsed.wrong) ? parsed.wrong : [],
      }
    }
  } catch {
    // ignore
  }
  return { completed: [], wrong: [] }
}

function saveProgress(p: Progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p))
  } catch {
    // ignore
  }
}

function loadRate(): number {
  try {
    const raw = localStorage.getItem(RATE_KEY)
    if (raw) {
      const v = parseFloat(raw)
      if (!Number.isNaN(v) && v >= 0.5 && v <= 2.0) return v
    }
  } catch {
    // ignore
  }
  return 1.0
}

function saveRate(r: number) {
  try {
    localStorage.setItem(RATE_KEY, String(r))
  } catch {
    // ignore
  }
}

/**
 * 将 passage 拆分为句子数组。
 * 处理规则：
 - 按 . ! ? 切分（保留标点）
 - 不拆分常见缩写（Mr. Mrs. Dr. 等）
 - 过滤空白
 */
function splitSentences(passage: string): string[] {
  const protectedPassage = passage
    .replace(/\bMr\./g, 'Mr\u200B')
    .replace(/\bMrs\./g, 'Mrs\u200B')
    .replace(/\bDr\./g, 'Dr\u200B')
    .replace(/\bSt\./g, 'St\u200B')
    .replace(/\be\.g\./g, 'e\u200Bg\u200B')
    .replace(/\bi\.e\./g, 'i\u200Be\u200B')

  // 按 . ! ? 后跟空白或字符串末尾切分，保留分隔符
  const sentences: string[] = []
  const regex = /[^.!?]+[.!?]+["')\]]*\s*/g
  let match
  while ((match = regex.exec(protectedPassage)) !== null) {
    const s = match[0].replace(/\u200B/g, '').trim()
    if (s) sentences.push(s)
  }
  // 若未匹配到任何内容（例如 passage 无句号），整段作为一句
  if (sentences.length === 0) {
    const s = passage.trim()
    if (s) sentences.push(s)
  }
  return sentences
}

const Reading: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(1)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [vocabOpen, setVocabOpen] = useState(false)
  const [phrasesOpen, setPhrasesOpen] = useState(false)
  const [selectorOpen, setSelectorOpen] = useState(false)
  const [rate, setRate] = useState<number>(loadRate)
  const [isBritish, setIsBritish] = useState(false)
  // 本篇文章内"已为哪些题自动展开过策略"（按 questionId 维度，避免同一题反复触发）
  const [autoOpenedQuestionIds, setAutoOpenedQuestionIds] = useState<Set<string>>(new Set())
  const selectorRef = useRef<HTMLDivElement | null>(null)

  // 当前级别所有文章
  const levelItems = useMemo(
    () => readingData.filter((item) => item.level === activeLevel),
    [activeLevel]
  )

  // 根据主题筛选
  const filteredItems = useMemo(() => {
    if (selectedCategories.length === 0) return levelItems
    return levelItems.filter((item) => selectedCategories.includes(item.category))
  }, [levelItems, selectedCategories])

  const currentItem: ReadingItem | undefined = filteredItems[currentIdx] || filteredItems[0]

  // 将当前文章正文拆分为句子
  const sentences = useMemo(
    () => (currentItem ? splitSentences(currentItem.passage) : []),
    [currentItem]
  )

  const handleSelectAnswer = useCallback((questionId: string, optionIdx: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIdx }))
  }, [])

  const handleReset = useCallback(() => {
    setAnswers({})
  }, [])

  const handlePrev = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentIdx((i) => i - 1)
      handleReset()
    }
  }, [currentIdx, handleReset])

  const handleNext = useCallback(() => {
    if (currentIdx < filteredItems.length - 1) {
      setCurrentIdx((i) => i + 1)
      handleReset()
    }
  }, [currentIdx, filteredItems.length, handleReset])

  const handleLevelChange = useCallback(
    (level: 1 | 2 | 3) => {
      setActiveLevel(level)
      setCurrentIdx(0)
      setSelectedCategories([])
      handleReset()
    },
    [handleReset]
  )

  const toggleCategory = useCallback((cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
    setCurrentIdx(0)
    handleReset()
  }, [handleReset])

  const handleSelectItem = useCallback(
    (serial: number) => {
      const idx = filteredItems.findIndex((it) => it.serial === serial)
      if (idx >= 0) {
        setCurrentIdx(idx)
        handleReset()
      }
      setSelectorOpen(false)
    },
    [filteredItems, handleReset]
  )

  const handleRateChange = useCallback((r: number) => {
    setRate(r)
    saveRate(r)
  }, [])

  // 点击外部关闭下拉
  useEffect(() => {
    if (!selectorOpen) return
    const handler = (e: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target as Node)) {
        setSelectorOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [selectorOpen])

  const allDone = progress.completed.length
  const isCurrentDone = currentItem && progress.completed.includes(currentItem.id)
  const currentCategories = readingCategories[activeLevel]

  // 自动保存进度：当所有题目都答完时，标记文章为已完成并记录错题
  useEffect(() => {
    if (!currentItem) return
    // 防御：空题目数组不应被自动标记为完成（避免新文章/数据缺失时被错误完成）
    if (currentItem.questions.length === 0) return
    const allAnswered = currentItem.questions.every((q) => answers[q.id] !== undefined)
    if (!allAnswered) return
    if (progress.completed.includes(currentItem.id)) return

    const wrongIds = currentItem.questions
      .filter((q) => answers[q.id] !== q.answer)
      .map((q) => ({ itemId: currentItem.id, questionId: q.id }))

    setProgress((prev) => {
      const next = { ...prev }
      next.completed = [...prev.completed, currentItem.id]
      next.wrong = [...prev.wrong, ...wrongIds]
      saveProgress(next)
      return next
    })
  }, [answers, currentItem, progress])

  // 朗读全文（按句依次串行播放）
  const [isReadingAll, setIsReadingAll] = useState(false)
  const stopReadingAllRef = useRef(false)

  // 组件卸载时强制停止朗读全文（修复内存泄漏）
  useEffect(() => {
    return () => {
      stopReadingAllRef.current = true
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // 答错时把对应 questionId 加入"已自动展开过"集合
  useEffect(() => {
    if (!currentItem) return
    setAutoOpenedQuestionIds((prev) => {
      let changed = false
      const next = new Set(prev)
      for (const q of currentItem.questions) {
        const sel = answers[q.id]
        if (sel !== undefined && sel !== q.answer && !next.has(q.id)) {
          next.add(q.id)
          changed = true
        }
      }
      return changed ? next : prev
    })
  }, [answers, currentItem])

  // 文章切换时清空"已自动展开过"集合
  useEffect(() => {
    setAutoOpenedQuestionIds(new Set())
  }, [currentItem?.id])

  // 文章切换时停止朗读全文（避免用旧闭包继续朗读）
  useEffect(() => {
    stopReadingAllRef.current = true
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsReadingAll(false)
  }, [currentItem?.id])

  const handleReadAll = useCallback(async () => {
    if (!currentItem) return
    if (!('speechSynthesis' in window)) {
      ;(window as Window).alert('当前浏览器不支持语音合成功能')
      return
    }
    if (isReadingAll) {
      stopReadingAllRef.current = true
      window.speechSynthesis.cancel()
      setIsReadingAll(false)
      return
    }
    stopReadingAllRef.current = false
    setIsReadingAll(true)
    const synth = window.speechSynthesis
    synth.cancel()
    for (const s of sentences) {
      if (stopReadingAllRef.current) break
      await new Promise<void>((resolve) => {
        const u = new SpeechSynthesisUtterance(s)
        u.lang = isBritish ? 'en-GB' : 'en-US'
        u.rate = rate
        u.onend = () => resolve()
        u.onerror = () => resolve()
        synth.speak(u)
      })
    }
    setIsReadingAll(false)
  }, [currentItem, sentences, rate, isBritish, isReadingAll])

  return (
    <div className="a-minimal-theme">
      <Layout>
        <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6">
          {/* 顶部导航 */}
          <div className="mb-6 flex items-center justify-between">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-lg font-bold text-indigo-500 no-underline hover:text-indigo-600"
            >
              <IconBook className="text-xl" />
              <span>English Learner</span>
            </NavLink>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>已完成:</span>
              <span className="font-semibold text-indigo-500">{allDone}</span>
              <span>/</span>
              <span>{readingData.length}</span>
            </div>
          </div>

          {/* 等级选择 */}
          <div className="mb-4 flex gap-3">
            {readingLevels.map((lv) => (
              <button
                key={lv.level}
                onClick={() => handleLevelChange(lv.level)}
                className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  activeLevel === lv.level
                    ? 'bg-indigo-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                {lv.title}
              </button>
            ))}
          </div>

          {/* 主题筛选 */}
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl bg-white/40 p-3 backdrop-blur-sm dark:bg-gray-800/30">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <IconFilter className="text-base" />
              <span className="font-medium">主题:</span>
            </div>
            <button
              onClick={() => {
                setSelectedCategories([])
                setCurrentIdx(0)
                handleReset()
              }}
              className={`rounded-full px-3 py-1 text-xs transition-all duration-200 ${
                selectedCategories.length === 0
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              全部
            </button>
            {currentCategories.map((cat) => {
              const active = selectedCategories.includes(cat)
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs transition-all duration-200 ${
                    active
                      ? 'bg-indigo-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* 文章卡片 */}
          {currentItem && (
            <div className="flex flex-col gap-5">
              {/* 文章标题 + 编号选择器 */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span className="shrink-0 rounded-md bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
                    #{currentItem.serial}
                  </span>
                  <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                    <IconCategory className="mr-0.5 inline-block text-xs" />
                    {currentItem.category}
                  </span>
                  <h2
                    title={currentItem.title}
                    className="truncate text-xl font-bold text-gray-800 dark:text-gray-100"
                  >
                    {currentItem.title}
                  </h2>
                </div>
                {/* 文章编号下拉选择器 */}
                <div ref={selectorRef} className="relative shrink-0">
                  <button
                    onClick={() => setSelectorOpen((v) => !v)}
                    className="flex items-center gap-1 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-gray-600 shadow-sm transition-all duration-200 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <span>
                      {currentIdx + 1} / {filteredItems.length}
                    </span>
                    <IconChevronDown className="text-base" />
                  </button>
                  {selectorOpen && (
                    <div className="absolute right-0 z-20 mt-2 max-h-80 w-72 overflow-y-auto rounded-xl border border-gray-100 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                      <div className="px-3 pb-2 text-xs text-gray-400">点击编号直接跳转</div>
                      <div className="grid grid-cols-5 gap-1 px-2">
                        {filteredItems.map((it, idx) => {
                          const done = progress.completed.includes(it.id)
                          const isActive = idx === currentIdx
                          return (
                            <button
                              key={it.id}
                              onClick={() => handleSelectItem(it.serial)}
                              title={it.title}
                              className={`relative flex aspect-square items-center justify-center rounded-md text-xs font-medium transition-all duration-200 ${
                                isActive
                                  ? 'bg-indigo-500 text-white shadow-sm'
                                  : done
                                    ? 'bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50'
                                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                              }`}
                            >
                              {it.serial}
                              {done && !isActive && (
                                <IconCheck className="absolute right-0.5 top-0.5 text-[10px] text-green-500" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 语速控制 + 口音切换 */}
              <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-sm dark:bg-gray-800/50">
                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
                  <IconClock className="text-base text-indigo-400" />
                  <span className="font-medium">朗读语速</span>
                </div>
                <div className="flex items-center gap-1">
                  {[
                    { v: 0.6, label: '0.6x' },
                    { v: 0.8, label: '0.8x' },
                    { v: 1.0, label: '1.0x' },
                    { v: 1.2, label: '1.2x' },
                    { v: 1.5, label: '1.5x' },
                    { v: 2.0, label: '2.0x' },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      onClick={() => handleRateChange(opt.v)}
                      className={`rounded-md px-2 py-0.5 text-xs transition-all duration-200 ${
                        Math.abs(rate - opt.v) < 0.01
                          ? 'bg-indigo-500 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <button
                    onClick={() => setIsBritish(false)}
                    className={`rounded-md px-2 py-0.5 text-xs transition-all duration-200 ${
                      !isBritish
                        ? 'bg-indigo-500 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    美音
                  </button>
                  <button
                    onClick={() => setIsBritish(true)}
                    className={`rounded-md px-2 py-0.5 text-xs transition-all duration-200 ${
                      isBritish
                        ? 'bg-indigo-500 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    英音
                  </button>
                </div>
              </div>

              {/* 生词面板 */}
              {currentItem.vocabulary.length > 0 && (
                <div className="rounded-2xl bg-white/70 shadow-sm backdrop-blur-sm dark:bg-gray-800/50">
                  <button
                    onClick={() => setVocabOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-5 py-3 text-left"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                      <IconBookmark className="text-indigo-400" />
                      <span>生词 ({currentItem.vocabulary.length})</span>
                      <span className="text-xs font-normal text-gray-400">点击喇叭朗读单词</span>
                    </div>
                    <IconChevronDown
                      className={`text-gray-400 transition-transform duration-200 ${
                        vocabOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {vocabOpen && (
                    <div className="border-t border-gray-100 px-5 py-3 dark:border-gray-700">
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {currentItem.vocabulary.map((v, i) => (
                          <div
                            key={i}
                            className="flex items-baseline gap-2 rounded-lg bg-indigo-50/60 px-3 py-2 text-sm dark:bg-indigo-900/20"
                          >
                            <SpeakerButton
                              text={v.word}
                              rate={rate}
                              isBritish={isBritish}
                              className="self-center"
                            />
                            <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                              {v.word}
                            </span>
                            {v.phonetic && (
                              <span className="text-xs text-gray-400">[{v.phonetic}]</span>
                            )}
                            <span className="text-gray-600 dark:text-gray-300">/ {v.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 难句面板 */}
              {currentItem.phrases.length > 0 && (
                <div className="rounded-2xl bg-white/70 shadow-sm backdrop-blur-sm dark:bg-gray-800/50">
                  <button
                    onClick={() => setPhrasesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-5 py-3 text-left"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                      <IconBulb className="text-amber-400" />
                      <span>难句 / 短语 ({currentItem.phrases.length})</span>
                      <span className="text-xs font-normal text-gray-400">点击喇叭朗读短语</span>
                    </div>
                    <IconChevronDown
                      className={`text-gray-400 transition-transform duration-200 ${
                        phrasesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {phrasesOpen && (
                    <div className="border-t border-gray-100 px-5 py-3 dark:border-gray-700">
                      <div className="flex flex-col gap-2">
                        {currentItem.phrases.map((p, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 rounded-lg bg-amber-50/60 px-3 py-2 text-sm dark:bg-amber-900/15"
                          >
                            <SpeakerButton
                              text={p.text}
                              rate={rate}
                              isBritish={isBritish}
                              className="mt-0.5 self-start"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-amber-700 dark:text-amber-300">
                                {p.text}
                              </div>
                              <div className="mt-0.5 text-gray-600 dark:text-gray-300">
                                {p.meaning}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 文章正文（按句拆分，每句可独立朗读） */}
              <div className="rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:bg-gray-800/50">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">
                    共 {sentences.length} 句，点击喇叭单句朗读
                  </span>
                  <button
                    onClick={handleReadAll}
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
                      isReadingAll
                        ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300'
                    }`}
                  >
                    <IconPlayerPlay className={`text-sm ${isReadingAll ? 'animate-pulse' : ''}`} />
                    {isReadingAll ? '停止朗读' : '朗读全文'}
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {sentences.map((sentence, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/30"
                    >
                      <SpeakerButton
                        text={sentence}
                        rate={rate}
                        isBritish={isBritish}
                        className="mt-0.5 self-start opacity-60 group-hover:opacity-100"
                      />
                      <p className="flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="mr-1.5 text-xs font-medium text-gray-400">{idx + 1}</span>
                        {sentence}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 题目区域 */}
              <div className="flex flex-col gap-4">
                {currentItem.questions.map((q, qi) => {
                  const selected = answers[q.id]
                  const isAnswered = selected !== undefined
                  const isCorrect = isAnswered && selected === q.answer
                  const qType = classifyQuestion(q)
                  const badgeColors = getColorClasses(qType)
                  const shouldAutoOpenStrategy =
                    isAnswered && !isCorrect && !autoOpenedQuestionIds.has(q.id)

                  return (
                    <div
                      key={q.id}
                      className={`rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:bg-gray-800/50`}
                    >
                      <div className="mb-3 flex items-start gap-2">
                        <SpeakerButton
                          text={q.question}
                          rate={rate}
                          isBritish={isBritish}
                          className="mt-0.5 shrink-0"
                        />
                        <p className="flex-1 font-medium text-gray-800 dark:text-gray-100">
                          <span className="mr-1.5 inline-block shrink-0 rounded px-1.5 py-0.5 align-middle text-[10px] font-medium">
                            {qi + 1}.
                          </span>
                          <span
                            className={`mr-1.5 inline-block shrink-0 rounded px-1.5 py-0.5 align-middle text-[10px] font-medium ${badgeColors.badge}`}
                            title={`${strategyData[qType].label}题`}
                          >
                            {strategyData[qType].label}
                          </span>
                          {q.question}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        {q.options.map((opt, oi) => {
                          let optionStyle =
                            'border-gray-200 bg-white/50 dark:border-gray-600 dark:bg-gray-800/30'
                          if (isAnswered) {
                            if (oi === q.answer) {
                              optionStyle = 'border-green-400 bg-green-50 dark:bg-green-900/20'
                            } else if (oi === selected) {
                              optionStyle = 'border-red-400 bg-red-50 dark:bg-red-900/20'
                            }
                          } else if (selected === oi) {
                            optionStyle =
                              'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                          }

                          return (
                            <div
                              key={oi}
                              className={`flex items-center gap-2 rounded-xl border px-2 py-1.5 text-sm transition-all duration-200 ${
                                isAnswered ? '' : 'hover:border-indigo-300'
                              } ${optionStyle}`}
                            >
                              <SpeakerButton
                                text={opt}
                                rate={rate}
                                isBritish={isBritish}
                                className="shrink-0 opacity-70"
                              />
                              <button
                                onClick={() => !isAnswered && handleSelectAnswer(q.id, oi)}
                                disabled={isAnswered}
                                className={`flex flex-1 items-center gap-3 rounded-lg px-2 py-1 text-left ${
                                  isAnswered ? 'cursor-default' : 'cursor-pointer'
                                }`}
                              >
                                <span
                                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                                    isAnswered
                                      ? oi === q.answer
                                        ? 'bg-green-400 text-white'
                                        : oi === selected
                                          ? 'bg-red-400 text-white'
                                          : 'bg-gray-200 text-gray-500 dark:bg-gray-700'
                                      : selected === oi
                                        ? 'bg-indigo-500 text-white'
                                        : 'bg-gray-200 text-gray-500 dark:bg-gray-700'
                                  }`}
                                >
                                  {isAnswered && oi === q.answer ? (
                                    <IconCheck className="text-sm" />
                                  ) : isAnswered && oi === selected && oi !== q.answer ? (
                                    <IconX className="text-sm" />
                                  ) : (
                                    String.fromCharCode(65 + oi)
                                  )}
                                </span>
                                <span className="flex-1 text-gray-700 dark:text-gray-300">
                                  {opt}
                                </span>
                              </button>
                            </div>
                          )
                        })}
                      </div>

                      {/* 答案解析 - 答题后显示 */}
                      {isAnswered && (
                        <div className="mt-3 flex items-start gap-2 rounded-xl bg-indigo-50 px-4 py-3 text-sm dark:bg-indigo-900/20">
                          <IconInfoCircle className="mt-0.5 shrink-0 text-indigo-400" />
                          <div className="flex-1">
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                              {isCorrect ? '回答正确! ' : '正确答案: '}
                              {q.options[q.answer]}
                            </span>
                            <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-400">
                                {q.explanation}
                              </p>
                          </div>
                          <SpeakerButton
                            text={q.options[q.answer]}
                            rate={rate}
                            isBritish={isBritish}
                            className="shrink-0"
                          />
                        </div>
                      )}

                      {/* 做题策略 - 答题后显示，由用户自选查看；首次答错时自动展开一次 */}
                      {isAnswered && <StrategyHint type={qType} autoOpen={shouldAutoOpenStrategy} />}
                    </div>
                  )
                })}
              </div>

              {/* 操作按钮 */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentIdx === 0}
                    className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm text-gray-500 transition-all duration-200 hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-gray-800"
                  >
                    <IconArrowLeft />
                    上一篇
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIdx >= filteredItems.length - 1}
                    className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm text-gray-500 transition-all duration-200 hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-gray-800"
                  >
                    下一篇
                    <IconArrowRight />
                  </button>
                </div>
                <div className="flex gap-2">
                  {isCurrentDone ? (
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-4 py-1.5 text-sm text-green-600 dark:bg-green-900/30 dark:text-green-400">
                      <IconCheck className="text-sm" />
                      已完成
                    </span>
                  ) : null}
                  <button
                    onClick={handleReset}
                    disabled={Object.keys(answers).length === 0}
                    className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-500 transition-all duration-200 hover:bg-gray-100 disabled:opacity-30 dark:border-gray-600 dark:hover:bg-gray-800"
                  >
                    重新作答
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 空状态 */}
          {!currentItem && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <p className="text-lg">该主题下暂无文章</p>
              <button
                onClick={() => setSelectedCategories([])}
                className="mt-3 rounded-full bg-indigo-500 px-4 py-1.5 text-sm text-white shadow-sm hover:bg-indigo-600"
              >
                查看全部
              </button>
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Reading