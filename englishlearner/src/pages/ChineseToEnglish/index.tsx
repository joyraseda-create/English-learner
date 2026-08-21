import Layout from '../../components/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import Header from '@/components/Header'
import IconCheck from '~icons/tabler/check'
import IconX from '~icons/tabler/x'
import IconArrowRight from '~icons/tabler/arrow-right'
import IconArrowLeft from '~icons/tabler/arrow-left'
import IconVolume from '~icons/tabler/volume'
import { NavLink } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { translationData, translationLevels } from './translationData'
import type { TranslationItem } from './translationData'
import { annotationsMap, roleColors } from './annotations'
import type { WordAnnotation } from './annotations'
import { extraAnnotations } from './data/extraAnnotations'

const allAnnotations: Record<string, WordAnnotation[]> = { ...annotationsMap, ...extraAnnotations }

const PROGRESS_KEY = 'el-cte-progress'

type Progress = {
  completed: string[]
  wrong: string[]
}

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { completed: parsed.completed || [], wrong: parsed.wrong || [] }
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

function speak(text: string) {
  try {
    const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=2`
    const audio = new Audio(url)
    audio.play().catch(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'en-US'
        utterance.rate = 0.9
        speechSynthesis.cancel()
        speechSynthesis.speak(utterance)
      } catch {
        // ignore
      }
    })
  } catch {
    try {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      speechSynthesis.cancel()
      speechSynthesis.speak(utterance)
    } catch {
      // ignore
    }
  }
}

const ChineseToEnglish: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(1)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const [progress, setProgress] = useState<Progress>(loadProgress)

  const levelItems = useMemo(
    () => translationData.filter((item) => item.level === activeLevel),
    [activeLevel]
  )

  const currentItem: TranslationItem = levelItems[currentIdx] || levelItems[0]
  const isCorrect = input.trim().toLowerCase() === currentItem.english.toLowerCase()
  const isCompleted = progress.completed.includes(currentItem.id)

  const handleLevelChange = (level: 1 | 2 | 3) => {
    setActiveLevel(level)
    setCurrentIdx(0)
    setInput('')
    setSubmitted(false)
  }

  const handlePlayAudio = useCallback(() => {
    speak(currentItem.english)
  }, [currentItem])

  useEffect(() => {
    if (autoPlay) {
      speak(currentItem.english)
    }
  }, [currentItem, autoPlay])

  const handleSubmit = () => {
    setSubmitted(true)
    setProgress((prev) => {
      const next = { ...prev }
      if (isCorrect) {
        if (!next.completed.includes(currentItem.id)) {
          next.completed = [...next.completed, currentItem.id]
        }
        next.wrong = next.wrong.filter((id) => id !== currentItem.id)
      } else {
        if (!next.wrong.includes(currentItem.id)) {
          next.wrong = [...next.wrong, currentItem.id]
        }
      }
      saveProgress(next)
      return next
    })
  }

  const handleNext = () => {
    if (currentIdx < levelItems.length - 1) {
      setCurrentIdx(currentIdx + 1)
      setInput('')
      setSubmitted(false)
    }
  }

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1)
      setInput('')
      setSubmitted(false)
    }
  }

  const handleNav = (idx: number) => {
    setCurrentIdx(idx)
    setInput('')
    setSubmitted(false)
  }

  const handleEnterPress = () => {
    if (!submitted) {
      handleSubmit()
    } else {
      handleNext()
    }
  }

  const completedCount = levelItems.filter((item) => progress.completed.includes(item.id)).length
  const wrongCount = levelItems.filter((item) => progress.wrong.includes(item.id)).length

  return (
    <Layout>
      <Header>
        <NavLink
          to="/"
          className="flex items-center gap-1 rounded-lg px-3 py-1 text-sm text-indigo-500 transition-colors hover:bg-indigo-400 hover:text-white"
        >
          <IconArrowLeft className="text-base" />
          返回首页
        </NavLink>
      </Header>
      <ErrorBoundary>
        <div className="mx-auto max-w-3xl px-4 py-6">
          <h1 className="mb-1 text-2xl font-bold text-gray-800 dark:text-gray-100">句子练习</h1>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            根据中文句子写出英文翻译，下方附有语法和句型知识
          </p>

          {/* Level selector */}
          <div className="mb-4 flex gap-2">
            {translationLevels.map((lv) => {
              const done = translationData.filter((i) => i.level === lv.level && progress.completed.includes(i.id)).length
              const total = translationData.filter((i) => i.level === lv.level).length
              return (
                <button
                  key={lv.level}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeLevel === lv.level
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                  onClick={() => handleLevelChange(lv.level as 1 | 2 | 3)}
                >
                  <div>Lv{lv.level} {lv.title}</div>
                  <div className="text-xs opacity-70">{done}/{total}</div>
                </button>
              )
            })}
          </div>

          {/* Stats bar */}
          <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-800/50">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              第 {currentIdx + 1} / {levelItems.length} 题 · 已完成 {completedCount} 题
            </span>
            {wrongCount > 0 && (
              <span className="text-xs text-rose-500">错题 {wrongCount} 题</span>
            )}
            <label className="flex items-center gap-1 text-xs text-gray-400">
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => setAutoPlay(e.target.checked)}
                className="h-3 w-3"
              />
              自动播放
            </label>
          </div>

          {/* Question navigation */}
          <div className="mb-4 flex flex-wrap gap-1">
            {levelItems.map((item, idx) => (
              <button
                key={item.id}
                className={`flex h-7 w-7 items-center justify-center rounded text-xs transition-colors ${
                  idx === currentIdx
                    ? 'bg-indigo-500 text-white'
                    : progress.completed.includes(item.id)
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      : progress.wrong.includes(item.id)
                        ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
                        : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                }`}
                onClick={() => handleNav(idx)}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900/50">
            {/* Grammar point badge */}
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                Lv{currentItem.level}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{currentItem.grammarPoint}</span>
              {isCompleted && <IconCheck className="text-green-500" />}
            </div>

            {/* Chinese sentence */}
            <div className="mb-4 rounded-lg bg-indigo-50 px-4 py-3 dark:bg-indigo-900/20">
              <p className="text-xs text-gray-400 mb-1">请将以下中文翻译为英文：</p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{currentItem.chinese}</p>
            </div>

            {/* Play audio button */}
            <div className="mb-3 flex items-center gap-2">
              <button
                className="flex items-center gap-1 rounded-lg bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-600 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400"
                onClick={handlePlayAudio}
              >
                <IconVolume className="text-base" />
                播放英文
              </button>
              {submitted && (
                <span className="text-xs text-gray-400">正确答案：{currentItem.english}</span>
              )}
            </div>

            {/* Input field */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEnterPress()}
              disabled={submitted && isCorrect}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              placeholder="输入英文翻译..."
              autoFocus
            />

            {/* Feedback */}
            {submitted && (
              <div className="mt-2">
                <div className={`flex items-center gap-1 text-sm ${isCorrect ? 'text-green-500' : 'text-rose-500'}`}>
                  {isCorrect ? (
                    <>
                      <IconCheck /> 正确！
                    </>
                  ) : (
                    <>
                      <IconX /> 错误
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Sentence annotations */}
            {submitted && (
              <div className="mt-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">句子成分分析：</p>
                <div className="flex flex-wrap gap-1">
                  {(allAnnotations[currentItem.id] || []).map((ann, i) => {
                    const colorClass = roleColors[ann.role] || 'text-gray-500 bg-gray-100 dark:bg-gray-800/50'
                    return (
                      <div key={i} className="flex flex-col items-center gap-0.5">
                        <span className="text-[10px] text-gray-400">{ann.role}</span>
                        <span className={`rounded px-1.5 py-0.5 text-sm font-mono ${colorClass}`}>
                          {ann.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Grammar notes */}
            <div className="mt-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
              <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-indigo-500">语法点：</span>{currentItem.grammarPoint}
              </p>
              <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-indigo-500">句型结构：</span>{currentItem.structure}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-indigo-500">语法要点：</span>{currentItem.tip}
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-3 flex flex-wrap gap-2">
              {currentIdx > 0 && (
                <button
                  className="flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                  onClick={handlePrev}
                >
                  <IconArrowLeft className="text-xs" />
                  上一题
                </button>
              )}
              {!submitted ? (
                <button
                  className="rounded-lg bg-indigo-500 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                  onClick={handleSubmit}
                >
                  提交答案
                </button>
              ) : !isCorrect ? (
                <button
                  className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                  onClick={() => { setSubmitted(false); setInput('') }}
                >
                  重试
                </button>
              ) : null}
              {currentIdx < levelItems.length - 1 && (
                <button
                  className="flex items-center gap-1 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                  onClick={handleNext}
                >
                  {submitted ? '下一题' : '跳过'}
                  <IconArrowRight className="text-xs" />
                </button>
              )}
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Layout>
  )
}

export default ChineseToEnglish
