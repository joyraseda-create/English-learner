import Layout from '../../components/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import Header from '@/components/Header'
import IconVolume from '~icons/tabler/volume'
import IconCheck from '~icons/tabler/check'
import IconX from '~icons/tabler/x'
import IconArrowRight from '~icons/tabler/arrow-right'
import IconArrowLeft from '~icons/tabler/arrow-left'
import IconBug from '~icons/tabler/bug'
import IconList from '~icons/tabler/list'
import IconClipboardCheck from '~icons/tabler/clipboard-check'
import IconNotebook from '~icons/tabler/notebook'
import { NavLink } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import useSpeech from '@/hooks/useSpeech'
import { levelGroups, allPatterns, errorCorrections, levelTests, stageTests } from './data'
import type { SentencePattern, TestQuestion } from './patternData'

const PROGRESS_KEY = 'el-sentence-pattern-progress'

type TestScore = { level: 1 | 2 | 3; score: number; total: number; passed: boolean }

type Progress = {
  completedPatterns: string[]
  completedErrors: string[]
  testScores: TestScore[]
  wrongTransforms: string[]
  wrongErrors: string[]
  wrongTests: string[]
}

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        completedPatterns: parsed.completedPatterns || [],
        completedErrors: parsed.completedErrors || [],
        testScores: parsed.testScores || [],
        wrongTransforms: parsed.wrongTransforms || [],
        wrongErrors: parsed.wrongErrors || [],
        wrongTests: parsed.wrongTests || [],
      }
    }
  } catch {
    // ignore
  }
  return { completedPatterns: [], completedErrors: [], testScores: [], wrongTransforms: [], wrongErrors: [], wrongTests: [] }
}

function saveProgress(p: Progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p))
  } catch {
    // ignore
  }
}

type TabType = 'patterns' | 'errors' | 'tests' | 'wrongbook'

const SentencePatternsPage: React.FC = () => {
  const [tab, setTab] = useState<TabType>('patterns')
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(1)
  const [activePatternIdx, setActivePatternIdx] = useState(0)
  const [activeGrammarPoint, setActiveGrammarPoint] = useState<string>(allPatterns[0].grammarPoint)
  const [progress, setProgress] = useState<Progress>(loadProgress)

  const currentGroup = levelGroups.find((g) => g.level === activeLevel)!
  const currentPattern = currentGroup.patterns[activePatternIdx]
  const isPatternCompleted = progress.completedPatterns.includes(currentPattern.id)

  const handlePatternComplete = useCallback((patternId: string) => {
    setProgress((prev) => {
      if (prev.completedPatterns.includes(patternId)) return prev
      const next = { ...prev, completedPatterns: [...prev.completedPatterns, patternId] }
      saveProgress(next)
      return next
    })
  }, [])

  const handleErrorComplete = useCallback((errorId: string) => {
    setProgress((prev) => {
      if (prev.completedErrors.includes(errorId)) return prev
      const next = { ...prev, completedErrors: [...prev.completedErrors, errorId] }
      saveProgress(next)
      return next
    })
  }, [])

  const goNextPattern = useCallback(() => {
    if (activePatternIdx < currentGroup.patterns.length - 1) {
      setActivePatternIdx(activePatternIdx + 1)
    }
  }, [activePatternIdx, currentGroup.patterns.length])

  const handleTestComplete = useCallback((result: TestScore) => {
    setProgress((prev) => {
      const filtered = prev.testScores.filter((t) => t.level !== result.level)
      const next = { ...prev, testScores: [...filtered, result] }
      saveProgress(next)
      return next
    })
  }, [])

  const handleTransformWrong = useCallback((patternId: string) => {
    setProgress((prev) => {
      if (prev.wrongTransforms.includes(patternId)) return prev
      const next = { ...prev, wrongTransforms: [...prev.wrongTransforms, patternId] }
      saveProgress(next)
      return next
    })
  }, [])

  const handleTransformRight = useCallback((patternId: string) => {
    setProgress((prev) => {
      if (!prev.wrongTransforms.includes(patternId)) return prev
      const next = { ...prev, wrongTransforms: prev.wrongTransforms.filter((id) => id !== patternId) }
      saveProgress(next)
      return next
    })
  }, [])

  const handleErrorWrong = useCallback((errorId: string) => {
    setProgress((prev) => {
      if (prev.wrongErrors.includes(errorId)) return prev
      const next = { ...prev, wrongErrors: [...prev.wrongErrors, errorId] }
      saveProgress(next)
      return next
    })
  }, [])

  const handleErrorRight = useCallback((errorId: string) => {
    setProgress((prev) => {
      if (!prev.wrongErrors.includes(errorId)) return prev
      const next = { ...prev, wrongErrors: prev.wrongErrors.filter((id) => id !== errorId) }
      saveProgress(next)
      return next
    })
  }, [])

  const handleTestWrongUpdate = useCallback((wrongQuestionIds: string[]) => {
    setProgress((prev) => {
      const next = { ...prev, wrongTests: wrongQuestionIds }
      saveProgress(next)
      return next
    })
  }, [])

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
        <div className="mx-auto max-w-4xl px-4 py-6">
          <h1 className="mb-1 text-2xl font-bold text-gray-800 dark:text-gray-100">句型学习</h1>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            通过句型变换和错句纠错，系统掌握英语核心语法
          </p>

          <div className="mb-4 flex gap-2">
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === 'patterns'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
              }`}
              onClick={() => setTab('patterns')}
            >
              <IconList className="text-base" />
              句型变换
            </button>
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === 'errors'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
              }`}
              onClick={() => setTab('errors')}
            >
              <IconBug className="text-base" />
              错句纠错
              <span className="ml-1 rounded-full bg-indigo-100 px-1.5 text-xs text-indigo-600 dark:bg-indigo-900/30">
                {progress.completedErrors.length}/{errorCorrections.length}
              </span>
            </button>
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === 'tests'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
              }`}
              onClick={() => setTab('tests')}
            >
              <IconClipboardCheck className="text-base" />
              阶段测试
              <span className="ml-1 rounded-full bg-indigo-100 px-1.5 text-xs text-indigo-600 dark:bg-indigo-900/30">
                {progress.testScores.filter((t) => t.passed).length}/{levelTests.length}
              </span>
            </button>
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === 'wrongbook'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
              }`}
              onClick={() => setTab('wrongbook')}
            >
              <IconNotebook className="text-base" />
              错题本
              <span className="ml-1 rounded-full bg-rose-100 px-1.5 text-xs text-rose-600 dark:bg-rose-900/30">
                {progress.wrongTransforms.length + progress.wrongErrors.length + progress.wrongTests.length}
              </span>
            </button>
          </div>

          {tab === 'patterns' ? (
            <PatternTab
              activeLevel={activeLevel}
              setActiveLevel={(lv) => {
                setActiveLevel(lv)
                setActivePatternIdx(0)
              }}
              activePatternIdx={activePatternIdx}
              setActivePatternIdx={setActivePatternIdx}
              currentGroup={currentGroup}
              currentPattern={currentPattern}
              isCompleted={isPatternCompleted}
              onComplete={handlePatternComplete}
              onNext={goNextPattern}
              progress={progress}
              onTransformWrong={handleTransformWrong}
              onTransformRight={handleTransformRight}
            />
          ) : tab === 'errors' ? (
            <ErrorTab
              progress={progress}
              onComplete={handleErrorComplete}
              activeGrammarPoint={activeGrammarPoint}
              setActiveGrammarPoint={setActiveGrammarPoint}
              onErrorWrong={handleErrorWrong}
              onErrorRight={handleErrorRight}
            />
          ) : tab === 'tests' ? (
            <TestTab
              progress={progress}
              onTestComplete={handleTestComplete}
              onTestWrongUpdate={handleTestWrongUpdate}
            />
          ) : (
            <WrongBookTab
              progress={progress}
              onJumpToPatterns={() => setTab('patterns')}
              onJumpToErrors={() => setTab('errors')}
              onJumpToTests={() => setTab('tests')}
              onClearTransform={(id) => handleTransformRight(id)}
              onClearError={(id) => handleErrorRight(id)}
              onClearTest={(id) => {
                setProgress((prev) => {
                  const next = { ...prev, wrongTests: prev.wrongTests.filter((qid) => qid !== id) }
                  saveProgress(next)
                  return next
                })
              }}
            />
          )}
        </div>
      </ErrorBoundary>
    </Layout>
  )
}

// === Pattern Tab (no level locking) ===

type PatternTabProps = {
  activeLevel: 1 | 2 | 3
  setActiveLevel: (lv: 1 | 2 | 3) => void
  activePatternIdx: number
  setActivePatternIdx: (idx: number) => void
  currentGroup: (typeof levelGroups)[0]
  currentPattern: SentencePattern
  isCompleted: boolean
  onComplete: (id: string) => void
  onNext: () => void
  progress: Progress
  onTransformWrong: (patternId: string) => void
  onTransformRight: (patternId: string) => void
}

function PatternTab({
  activeLevel,
  setActiveLevel,
  activePatternIdx,
  setActivePatternIdx,
  currentGroup,
  currentPattern,
  isCompleted,
  onComplete,
  onNext,
  progress,
  onTransformWrong,
  onTransformRight,
}: PatternTabProps) {
  return (
    <div className="flex gap-4">
      <div className="w-56 shrink-0">
        {/* Level selector — no locking */}
        <div className="mb-3 flex flex-col gap-1">
          {levelGroups.map((g) => {
            const done = g.patterns.filter((p) => progress.completedPatterns.includes(p.id)).length
            return (
              <button
                key={g.level}
                className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  activeLevel === g.level
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveLevel(g.level as 1 | 2 | 3)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">Lv{g.level} {g.title}</span>
                  <span className="text-xs opacity-70">{done}/{g.patterns.length}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Pattern list */}
        <div className="flex max-h-[60vh] flex-col gap-1 overflow-y-auto">
          {currentGroup.patterns.map((p, idx) => {
            const done = progress.completedPatterns.includes(p.id)
            return (
              <button
                key={p.id}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-left text-xs transition-colors ${
                  idx === activePatternIdx
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                    : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50'
                }`}
                onClick={() => setActivePatternIdx(idx)}
              >
                {done ? (
                  <IconCheck className="text-xs text-green-500" />
                ) : (
                  <span className="w-3 text-center text-gray-400">{idx + 1}</span>
                )}
                <span className="flex-1 truncate">{p.grammarPoint}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1">
        <PatternCard
          pattern={currentPattern}
          isCompleted={isCompleted}
          onComplete={onComplete}
          onNext={onNext}
          hasNext={activePatternIdx < currentGroup.patterns.length - 1}
          onTransformWrong={onTransformWrong}
          onTransformRight={onTransformRight}
        />
      </div>
    </div>
  )
}

// === Pattern Card (free navigation in transforms) ===

type PatternCardProps = {
  pattern: SentencePattern
  isCompleted: boolean
  onComplete: (id: string) => void
  onNext: () => void
  hasNext: boolean
  onTransformWrong: (patternId: string) => void
  onTransformRight: (patternId: string) => void
}

function PatternCard({ pattern, isCompleted, onComplete, onNext, hasNext, onTransformWrong, onTransformRight }: PatternCardProps) {
  const [phase, setPhase] = useState<'learn' | 'type' | 'transform'>('learn')
  const [typed, setTyped] = useState('')
  const [typeSubmitted, setTypeSubmitted] = useState(false)
  const [transformIdx, setTransformIdx] = useState(0)
  const [transformInput, setTransformInput] = useState('')
  const [transformSubmitted, setTransformSubmitted] = useState(false)
  const [allTransformsDone, setAllTransformsDone] = useState(false)

  const speechOption = useMemo(() => ({ lang: 'en-US', rate: 0.9 }), [])
  const { speak, cancel, speaking } = useSpeech(pattern.sentence, speechOption)

  const handleTypeSubmit = () => {
    setTypeSubmitted(true)
    if (typed.trim().toLowerCase() === pattern.sentence.toLowerCase()) {
      setTimeout(() => {
        setPhase('transform')
      }, 1000)
    }
  }

  const handleTypeSkip = () => {
    setPhase('transform')
  }

  const currentTransform = pattern.transformations[transformIdx]
  const isTransformCorrect =
    transformInput.trim().toLowerCase() === currentTransform.answer.toLowerCase()

  const handleTransformSubmit = () => {
    setTransformSubmitted(true)
    if (isTransformCorrect) {
      onTransformRight(pattern.id)
      if (transformIdx === pattern.transformations.length - 1) {
        setAllTransformsDone(true)
        onComplete(pattern.id)
      }
    } else {
      onTransformWrong(pattern.id)
    }
  }

  const handleTransformNext = () => {
    if (transformIdx < pattern.transformations.length - 1) {
      setTransformIdx(transformIdx + 1)
      setTransformInput('')
      setTransformSubmitted(false)
    } else {
      setAllTransformsDone(true)
      onComplete(pattern.id)
    }
  }

  const handleTransformPrev = () => {
    if (transformIdx > 0) {
      setTransformIdx(transformIdx - 1)
      setTransformInput('')
      setTransformSubmitted(false)
    }
  }

  const handleReset = () => {
    setPhase('learn')
    setTyped('')
    setTypeSubmitted(false)
    setTransformIdx(0)
    setTransformInput('')
    setTransformSubmitted(false)
    setAllTransformsDone(false)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900/50">
      {/* Grammar explanation */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
            Lv{pattern.level}
          </span>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">{pattern.grammarPoint}</h2>
          {isCompleted && <IconCheck className="text-green-500" />}
        </div>
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
          <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium text-indigo-500">句型结构：</span>{pattern.structure}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium text-indigo-500">语法要点：</span>{pattern.tip}
          </p>
        </div>
      </div>

      {/* Phase indicators */}
      <div className="mb-4 flex items-center gap-2 text-xs">
        <PhaseDot active={phase === 'learn'} done={phase !== 'learn'} label="语法讲解" />
        <span className="text-gray-300">→</span>
        <PhaseDot active={phase === 'type'} done={phase === 'transform'} label="打字练习" />
        <span className="text-gray-300">→</span>
        <PhaseDot active={phase === 'transform'} done={allTransformsDone} label="句型变换" />
      </div>

      {/* Phase 1: Learn */}
      {phase === 'learn' && (
        <div>
          <div className="mb-3 rounded-lg bg-indigo-50 px-4 py-3 dark:bg-indigo-900/20">
            <div className="flex items-center gap-2">
              <p className="flex-1 text-lg font-medium text-gray-800 dark:text-gray-100">
                {pattern.sentence}
              </p>
              <button
                onClick={() => (speaking ? cancel() : speak(true))}
                className="rounded p-1 text-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                title="播放发音"
              >
                <IconVolume className={`text-lg ${speaking ? 'animate-pulse text-indigo-600' : ''}`} />
              </button>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{pattern.sentenceTrans}</p>
          </div>
          <button
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
            onClick={() => setPhase('type')}
          >
            开始练习
          </button>
        </div>
      )}

      {/* Phase 2: Type */}
      {phase === 'type' && (
        <div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">请输入以下句子的英文：</p>
          <p className="mb-2 text-base text-gray-600 dark:text-gray-300">{pattern.sentenceTrans}</p>
          <input
            type="text"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTypeSubmit()}
            disabled={typeSubmitted && typed.trim().toLowerCase() === pattern.sentence.toLowerCase()}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            placeholder="输入英文句子..."
            autoFocus
          />
          {typeSubmitted && (
            <div className={`mt-2 flex items-center gap-1 text-sm ${typed.trim().toLowerCase() === pattern.sentence.toLowerCase() ? 'text-green-500' : 'text-rose-500'}`}>
              {typed.trim().toLowerCase() === pattern.sentence.toLowerCase() ? (
                <>
                  <IconCheck /> 正确！进入句型变换练习
                </>
              ) : (
                <>
                  <IconX /> 正确答案：{pattern.sentence}
                </>
              )}
            </div>
          )}
          <div className="mt-2 flex gap-2">
            {!typeSubmitted && (
              <button
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                onClick={handleTypeSubmit}
              >
                提交
              </button>
            )}
            <button
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
              onClick={handleTypeSkip}
            >
              跳过打字
            </button>
            {typeSubmitted && typed.trim().toLowerCase() !== pattern.sentence.toLowerCase() && (
              <button
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                onClick={() => { setTypeSubmitted(false); setTyped('') }}
              >
                重试
              </button>
            )}
          </div>
        </div>
      )}

      {/* Phase 3: Transform (free navigation) */}
      {phase === 'transform' && !allTransformsDone && (
        <div>
          <div className="mb-3 rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800/50">
            <p className="text-sm text-gray-500 dark:text-gray-400">原句：</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{pattern.sentence}</p>
          </div>
          <div className="mb-3">
            <p className="mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              变换 {transformIdx + 1}/{pattern.transformations.length}：{currentTransform.instruction}
            </p>
            {currentTransform.hint && (
              <p className="mb-1 text-xs text-gray-400">提示：{currentTransform.hint}</p>
            )}
            <input
              type="text"
              value={transformInput}
              onChange={(e) => setTransformInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTransformSubmit()}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              placeholder="输入变换后的句子（可跳过直接看答案）"
              autoFocus
            />
          </div>
          {transformSubmitted && (
            <div className={`mb-2 flex items-start gap-1 text-sm ${isTransformCorrect ? 'text-green-500' : 'text-rose-500'}`}>
              {isTransformCorrect ? (
                <>
                  <IconCheck className="mt-0.5 shrink-0" /> 正确！
                </>
              ) : (
                <>
                  <IconX className="mt-0.5 shrink-0" /> 正确答案：{currentTransform.answer}
                </>
              )}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {!transformSubmitted && (
              <button
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                onClick={handleTransformSubmit}
              >
                提交
              </button>
            )}
            {/* Show "看答案" button after submit if wrong, or always allow skip */}
            {transformSubmitted && !isTransformCorrect && (
              <button
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                onClick={() => { setTransformSubmitted(false); setTransformInput('') }}
              >
                重试
              </button>
            )}
            {/* Previous button */}
            {transformIdx > 0 && (
              <button
                className="flex items-center gap-1 rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                onClick={handleTransformPrev}
              >
                <IconArrowLeft className="text-xs" />
                上一题
              </button>
            )}
            {/* Next / Skip button — always available */}
            {transformIdx < pattern.transformations.length - 1 ? (
              <button
                className="flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                onClick={handleTransformNext}
              >
                {transformSubmitted ? '下一题' : '跳过'}
                <IconArrowRight className="text-xs" />
              </button>
            ) : (
              <button
                className="flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
                onClick={handleTransformNext}
              >
                完成
                <IconCheck className="text-xs" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* All done */}
      {allTransformsDone && (
        <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
          <p className="mb-3 text-lg font-bold text-green-600 dark:text-green-400">完成本句型所有练习！</p>
          <div className="flex justify-center gap-2">
            <button
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
              onClick={handleReset}
            >
              再练一次
            </button>
            {hasNext && (
              <button
                className="flex items-center gap-1 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                onClick={onNext}
              >
                下一个句型
                <IconArrowRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// === Error Tab (grouped by grammar points from pattern data) ===

type ErrorTabProps = {
  progress: Progress
  onComplete: (id: string) => void
  activeGrammarPoint: string
  setActiveGrammarPoint: (gp: string) => void
  onErrorWrong: (errorId: string) => void
  onErrorRight: (errorId: string) => void
}

function ErrorTab({ progress, onComplete, activeGrammarPoint, setActiveGrammarPoint, onErrorWrong, onErrorRight }: ErrorTabProps) {
  const [activeErrorIdx, setActiveErrorIdx] = useState(0)
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Group errors by grammar point
  const grammarPoints = useMemo(() => {
    const seen = new Set<string>()
    const result: { level: 1 | 2 | 3; grammarPoint: string }[] = []
    for (const p of allPatterns) {
      if (!seen.has(p.grammarPoint)) {
        seen.add(p.grammarPoint)
        result.push({ level: p.level, grammarPoint: p.grammarPoint })
      }
    }
    return result
  }, [])

  // Errors for the selected grammar point
  const currentErrors = useMemo(
    () => errorCorrections.filter((e) => e.grammarPoint === activeGrammarPoint),
    [activeGrammarPoint]
  )

  // If no errors for this grammar point, show a message
  const hasErrors = currentErrors.length > 0
  const currentError = hasErrors ? currentErrors[activeErrorIdx] : null
  const isCorrect = currentError ? input.trim().toLowerCase() === currentError.correctSentence.toLowerCase() : false

  const handleGrammarPointChange = (gp: string) => {
    setActiveGrammarPoint(gp)
    setActiveErrorIdx(0)
    setInput('')
    setSubmitted(false)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    if (isCorrect && currentError) {
      onErrorRight(currentError.id)
      onComplete(currentError.id)
      setTimeout(() => {
        if (activeErrorIdx < currentErrors.length - 1) {
          setActiveErrorIdx(activeErrorIdx + 1)
          setInput('')
          setSubmitted(false)
        }
      }, 1500)
    } else if (currentError) {
      onErrorWrong(currentError.id)
    }
  }

  const handleErrorNav = (idx: number) => {
    setActiveErrorIdx(idx)
    setInput('')
    setSubmitted(false)
  }

  return (
    <div className="flex gap-4">
      {/* Sidebar: grammar points grouped by level */}
      <div className="w-56 shrink-0">
        <div className="mb-2 text-xs font-medium text-gray-400">按语法点分类</div>
        <div className="flex max-h-[60vh] flex-col gap-1 overflow-y-auto">
          {[1, 2, 3].map((lv) => {
            const gps = grammarPoints.filter((g) => g.level === lv)
            if (gps.length === 0) return null
            return (
              <div key={lv} className="mb-2">
                <div className="mb-1 px-1 text-xs font-bold text-gray-400">Lv{lv}</div>
                {gps.map((g) => {
                  const errs = errorCorrections.filter((e) => e.grammarPoint === g.grammarPoint)
                  const done = errs.filter((e) => progress.completedErrors.includes(e.id)).length
                  return (
                    <button
                      key={g.grammarPoint}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left text-xs transition-colors ${
                        activeGrammarPoint === g.grammarPoint
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                          : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50'
                      }`}
                      onClick={() => handleGrammarPointChange(g.grammarPoint)}
                    >
                      <span className="flex-1 truncate">{g.grammarPoint}</span>
                      <span className="ml-1 text-xs text-gray-400">
                        {errs.length > 0 ? `${done}/${errs.length}` : ''}
                      </span>
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {hasErrors && currentError ? (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activeGrammarPoint} · 第 {activeErrorIdx + 1} / {currentErrors.length} 题
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                已完成 {progress.completedErrors.filter((id) => currentErrors.some((e) => e.id === id)).length} 题
              </p>
            </div>

            {currentErrors.length > 1 && (
              <div className="mb-4 flex flex-wrap gap-1">
                {currentErrors.map((e, idx) => (
                  <button
                    key={e.id}
                    className={`flex h-7 w-7 items-center justify-center rounded text-xs transition-colors ${
                      idx === activeErrorIdx
                        ? 'bg-indigo-500 text-white'
                        : progress.completedErrors.includes(e.id)
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                    }`}
                    onClick={() => handleErrorNav(idx)}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            )}

            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900/50">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-md bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  Lv{currentError.level}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{currentError.grammarPoint}</span>
              </div>

              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">以下句子有语法错误，请写出正确句子：</p>
              <div className="mb-3 rounded-lg bg-rose-50 px-3 py-2 dark:bg-rose-900/20">
                <p className="font-mono text-sm text-rose-600 dark:text-rose-400">{currentError.wrongSentence}</p>
              </div>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                disabled={submitted && isCorrect}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                placeholder="输入正确的句子..."
                autoFocus
              />

              {submitted && (
                <div className="mt-2">
                  <div className={`flex items-center gap-1 text-sm ${isCorrect ? 'text-green-500' : 'text-rose-500'}`}>
                    {isCorrect ? (
                      <>
                        <IconCheck /> 正确！
                      </>
                    ) : (
                      <>
                        <IconX /> 正确答案：{currentError.correctSentence}
                      </>
                    )}
                  </div>
                  <div className="mt-2 rounded-lg bg-indigo-50 px-3 py-2 dark:bg-indigo-900/20">
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      <span className="font-medium text-indigo-500">解析：</span>{currentError.explanation}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-2 flex flex-wrap gap-2">
                {!submitted && (
                  <button
                    className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                    onClick={handleSubmit}
                  >
                    提交
                  </button>
                )}
                {submitted && !isCorrect && (
                  <button
                    className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                    onClick={() => { setSubmitted(false); setInput('') }}
                  >
                    重试
                  </button>
                )}
                {/* Free navigation: prev/next without answering correctly */}
                {activeErrorIdx > 0 && (
                  <button
                    className="flex items-center gap-1 rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                    onClick={() => handleErrorNav(activeErrorIdx - 1)}
                  >
                    <IconArrowLeft className="text-xs" />
                    上一题
                  </button>
                )}
                {activeErrorIdx < currentErrors.length - 1 && (
                  <button
                    className="flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                    onClick={() => handleErrorNav(activeErrorIdx + 1)}
                  >
                    {submitted ? '下一题' : '跳过'}
                    <IconArrowRight className="text-xs" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center rounded-xl border border-gray-200 bg-white p-10 dark:border-gray-700 dark:bg-gray-900/50">
            <p className="text-gray-400">该语法点暂无错句纠错题目</p>
          </div>
        )}
      </div>
    </div>
  )
}

// === Phase Dot ===

function PhaseDot({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 ${
        active
          ? 'bg-indigo-500 text-white'
          : done
            ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-gray-100 text-gray-400 dark:bg-gray-800'
      }`}
    >
      {label}
    </span>
  )
}

// === Test Tab (Stage Tests) ===

type TestTabProps = {
  progress: Progress
  onTestComplete: (result: TestScore) => void
  onTestWrongUpdate: (wrongQuestionIds: string[]) => void
}

function TestTab({ progress, onTestComplete, onTestWrongUpdate }: TestTabProps) {
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3 | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [currentQIdx, setCurrentQIdx] = useState(0)

  const currentTest = selectedLevel ? levelTests.find((t) => t.level === selectedLevel) : null
  const questions = currentTest?.questions || []
  const passedCount = progress.testScores.filter((t) => t.passed).length

  const startTest = (level: 1 | 2 | 3) => {
    setSelectedLevel(level)
    setAnswers(new Array(levelTests.find((t) => t.level === level)!.questions.length).fill(null))
    setSubmitted(false)
    setCurrentQIdx(0)
  }

  const selectAnswer = (qIdx: number, optIdx: number) => {
    if (submitted) return
    setAnswers((prev) => {
      const next = [...prev]
      next[qIdx] = optIdx
      return next
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const score = answers.reduce<number>((acc, ans, i) => (ans === questions[i].correctIndex ? acc + 1 : acc), 0)
    const total = questions.length
    const passed = score >= Math.ceil(total * 0.7)
    onTestComplete({ level: selectedLevel!, score, total, passed })
    // Update wrong test questions: keep wrong ones from other levels + new wrong ones from this level
    const thisLevelWrongIds = questions.filter((q, i) => answers[i] !== q.correctIndex).map((q) => q.id)
    const otherLevelWrongIds = progress.wrongTests.filter((id) => !questions.some((q) => q.id === id))
    onTestWrongUpdate([...otherLevelWrongIds, ...thisLevelWrongIds])
  }

  const handleReset = () => {
    setSelectedLevel(null)
    setAnswers([])
    setSubmitted(false)
    setCurrentQIdx(0)
  }

  // Start screen: show level selection
  if (!currentTest) {
    return (
      <div>
        <div className="mb-4 rounded-lg bg-indigo-50 px-4 py-3 dark:bg-indigo-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            完成每个等级的句型变换和错句纠错后，来这里测试你的掌握程度。每级 10 道选择题，答对 70% 即为通过。
          </p>
          <p className="mt-1 text-sm text-indigo-500">已通过 {passedCount}/{levelTests.length} 级测试</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {levelTests.map((t) => {
            const score = progress.testScores.find((s) => s.level === t.level)
            const passed = score?.passed
            return (
              <div
                key={t.level}
                className={`rounded-xl border p-5 text-center transition-colors ${
                  passed
                    ? 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
                    : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900/50'
                }`}
              >
                <div className="mb-2 text-3xl">
                  {passed ? '✅' : t.level === 1 ? '🌱' : t.level === 2 ? '🌿' : '🌳'}
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-800 dark:text-gray-100">Lv{t.level} {t.title}</h3>
                <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">{t.questions.length} 道选择题</p>
                {score && (
                  <p className={`mb-3 text-sm font-medium ${passed ? 'text-green-500' : 'text-rose-500'}`}>
                    {passed ? '已通过' : '未通过'} · {score.score}/{score.total}
                  </p>
                )}
                <button
                  className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
                  onClick={() => startTest(t.level)}
                >
                  {score ? '重新测试' : '开始测试'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Result screen
  if (submitted) {
    const score = answers.reduce<number>((acc, ans, i) => (ans === questions[i].correctIndex ? acc + 1 : acc), 0)
    const total = questions.length
    const passed = score >= Math.ceil(total * 0.7)
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/50">
        <div className="mb-6 text-center">
          <div className="mb-2 text-4xl">{passed ? '🎉' : '💪'}</div>
          <h2 className={`text-2xl font-bold ${passed ? 'text-green-500' : 'text-rose-500'}`}>
            {passed ? '恭喜通过！' : '继续努力！'}
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            得分：<span className="font-bold text-indigo-500">{score}</span> / {total}
            <span className="ml-2 text-sm text-gray-400">（通过线：{Math.ceil(total * 0.7)}题）</span>
          </p>
        </div>

        <div className="mb-4 space-y-3">
          {questions.map((q, i) => {
            const userAns = answers[i]
            const correct = userAns === q.correctIndex
            return (
              <div key={q.id} className={`rounded-lg border p-3 ${correct ? 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20' : 'border-rose-200 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20'}`}>
                <div className="mb-1 flex items-center gap-2">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-xs text-white ${correct ? 'bg-green-500' : 'bg-rose-500'}`}>
                    {correct ? '✓' : '✗'}
                  </span>
                  <span className="text-xs text-gray-400">{q.grammarPoint}</span>
                </div>
                <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">{q.question}</p>
                <p className="text-sm font-mono text-gray-700 dark:text-gray-200">{q.options[q.correctIndex]}</p>
                {!correct && userAns !== null && (
                  <p className="mt-1 text-xs text-rose-400">你的答案：{q.options[userAns]}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">{q.explanation}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center gap-3">
          <button
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
            onClick={handleReset}
          >
            返回选择
          </button>
          <button
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
            onClick={() => startTest(selectedLevel!)}
          >
            再测一次
          </button>
        </div>
      </div>
    )
  }

  // Test in progress
  const q = questions[currentQIdx]
  const answeredCount = answers.filter((a) => a !== null).length
  const allAnswered = answeredCount === questions.length

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900/50">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
            Lv{selectedLevel}
          </span>
          <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">{currentTest.title}</span>
        </div>
        <button
          className="text-xs text-gray-400 hover:text-gray-600"
          onClick={handleReset}
        >
          退出测试
        </button>
      </div>

      {/* Question navigation */}
      <div className="mb-4 flex flex-wrap gap-1">
        {questions.map((qq, i) => (
          <button
            key={qq.id}
            className={`flex h-7 w-7 items-center justify-center rounded text-xs transition-colors ${
              i === currentQIdx
                ? 'bg-indigo-500 text-white'
                : answers[i] !== null
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
            }`}
            onClick={() => setCurrentQIdx(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        />
      </div>
      <p className="mb-3 text-xs text-gray-400">已答 {answeredCount}/{questions.length} 题</p>

      {/* Current question */}
      <div className="mb-4">
        <div className="mb-1 text-xs text-gray-400">{q.grammarPoint}</div>
        <p className="mb-3 text-base font-medium text-gray-700 dark:text-gray-200">
          第 {currentQIdx + 1} 题：{q.question}
        </p>
        <div className="flex flex-col gap-2">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                answers[currentQIdx] === i
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300'
                  : 'border-gray-200 text-gray-600 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-indigo-900/10'
              }`}
              onClick={() => selectAnswer(currentQIdx, i)}
            >
              <span className="mr-2 font-mono text-xs text-gray-400">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          className="flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 disabled:opacity-30 dark:bg-gray-700 dark:text-gray-300"
          onClick={() => setCurrentQIdx(Math.max(0, currentQIdx - 1))}
          disabled={currentQIdx === 0}
        >
          <IconArrowLeft className="text-xs" />
          上一题
        </button>

        {currentQIdx < questions.length - 1 ? (
          <button
            className="flex items-center gap-1 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
            onClick={() => setCurrentQIdx(currentQIdx + 1)}
          >
            下一题
            <IconArrowRight className="text-xs" />
          </button>
        ) : (
          <button
            className="flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 disabled:opacity-50"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            <IconCheck className="text-xs" />
            提交测试
          </button>
        )}
      </div>

      {!allAnswered && currentQIdx === questions.length - 1 && (
        <p className="mt-2 text-center text-xs text-rose-400">还有 {questions.length - answeredCount} 题未作答</p>
      )}
    </div>
  )
}

// === Wrong Book Tab ===

type WrongBookTabProps = {
  progress: Progress
  onJumpToPatterns: () => void
  onJumpToErrors: () => void
  onJumpToTests: () => void
  onClearTransform: (id: string) => void
  onClearError: (id: string) => void
  onClearTest: (id: string) => void
}

function WrongBookTab({ progress, onJumpToPatterns, onJumpToErrors, onJumpToTests, onClearTransform, onClearError, onClearTest }: WrongBookTabProps) {
  const wrongPatterns = allPatterns.filter((p) => progress.wrongTransforms.includes(p.id))
  const wrongErrs = errorCorrections.filter((e) => progress.wrongErrors.includes(e.id))
  const wrongTestQs = stageTests.filter((q) => progress.wrongTests.includes(q.id))
  const totalWrong = wrongPatterns.length + wrongErrs.length + wrongTestQs.length

  if (totalWrong === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-16 dark:border-gray-700 dark:bg-gray-900/50">
        <div className="mb-3 text-4xl">📝</div>
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">暂无错题</p>
        <p className="mt-1 text-sm text-gray-400">在句型变换、错句纠错或阶段测试中答错的题目会自动收集到这里</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-rose-50 px-4 py-3 dark:bg-rose-900/20">
        <p className="text-sm text-rose-600 dark:text-rose-400">
          共 {totalWrong} 道错题（句型变换 {wrongPatterns.length} 题 · 错句纠错 {wrongErrs.length} 题 · 阶段测试 {wrongTestQs.length} 题）
        </p>
      </div>

      {/* Wrong pattern transformations */}
      {wrongPatterns.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200">句型变换错题</h3>
            <button
              className="text-xs text-indigo-500 hover:underline"
              onClick={onJumpToPatterns}
            >
              去练习 →
            </button>
          </div>
          <div className="space-y-2">
            {wrongPatterns.map((p) => (
              <div key={p.id} className="rounded-lg border border-rose-200 bg-white p-3 dark:border-rose-900/50 dark:bg-gray-900/50">
                <div className="mb-1 flex items-center justify-between">
                  <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-xs text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">Lv{p.level} · {p.grammarPoint}</span>
                  <button
                    className="text-xs text-gray-400 hover:text-rose-500"
                    onClick={() => onClearTransform(p.id)}
                  >
                    移除
                  </button>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200">{p.sentence}</p>
                <p className="text-xs text-gray-400">{p.sentenceTrans}</p>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-indigo-500">结构：</span>{p.structure}
                </div>
                <div className="mt-1 text-xs text-green-600 dark:text-green-400">
                  {p.transformations.map((t, i) => (
                    <div key={i}>· {t.instruction} → {t.answer}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wrong error corrections */}
      {wrongErrs.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200">错句纠错错题</h3>
            <button
              className="text-xs text-indigo-500 hover:underline"
              onClick={onJumpToErrors}
            >
              去练习 →
            </button>
          </div>
          <div className="space-y-2">
            {wrongErrs.map((e) => (
              <div key={e.id} className="rounded-lg border border-rose-200 bg-white p-3 dark:border-rose-900/50 dark:bg-gray-900/50">
                <div className="mb-1 flex items-center justify-between">
                  <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-xs text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">Lv{e.level} · {e.grammarPoint}</span>
                  <button
                    className="text-xs text-gray-400 hover:text-rose-500"
                    onClick={() => onClearError(e.id)}
                  >
                    移除
                  </button>
                </div>
                <div className="mb-1 rounded bg-rose-50 px-2 py-1 dark:bg-rose-900/20">
                  <p className="font-mono text-xs text-rose-600 dark:text-rose-400">✗ {e.wrongSentence}</p>
                </div>
                <div className="mb-1 rounded bg-green-50 px-2 py-1 dark:bg-green-900/20">
                  <p className="font-mono text-xs text-green-600 dark:text-green-400">✓ {e.correctSentence}</p>
                </div>
                <p className="text-xs text-gray-400">{e.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wrong test questions */}
      {wrongTestQs.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200">阶段测试错题</h3>
            <button
              className="text-xs text-indigo-500 hover:underline"
              onClick={onJumpToTests}
            >
              去练习 →
            </button>
          </div>
          <div className="space-y-2">
            {wrongTestQs.map((q) => (
              <div key={q.id} className="rounded-lg border border-rose-200 bg-white p-3 dark:border-rose-900/50 dark:bg-gray-900/50">
                <div className="mb-1 flex items-center justify-between">
                  <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-xs text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">Lv{q.level} · {q.grammarPoint}</span>
                  <button
                    className="text-xs text-gray-400 hover:text-rose-500"
                    onClick={() => onClearTest(q.id)}
                  >
                    移除
                  </button>
                </div>
                <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">{q.question}</p>
                <div className="space-y-0.5">
                  {q.options.map((opt, i) => (
                    <p key={i} className={`text-xs ${i === q.correctIndex ? 'font-medium text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
                      {String.fromCharCode(65 + i)}. {opt}{i === q.correctIndex ? ' ✓' : ''}
                    </p>
                  ))}
                </div>
                <p className="mt-1 text-xs text-gray-400">{q.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SentencePatternsPage
