import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import IconCheck from '~icons/tabler/check'
import IconX from '~icons/tabler/x'
import IconRefresh from '~icons/tabler/refresh'
import IconChart from '~icons/tabler/chart-bar'
import IconAlertCircle from '~icons/tabler/alert-circle'
import { type GrammarExercise, bookLevels, grammarLessons } from './grammarData'
import { grammarExercises } from './exerciseData'
import {
  type WrongQuestion,
  getAllAnswers,
  getWrongCount,
  getWrongQuestionList,
  resetAllAnswers,
  saveAnswer,
  setWrongQuestionDetail,
} from './grammarProgress'

const typeLabels: Record<GrammarExercise['type'], string> = {
  choice: '选择题',
  fill: '填空题',
  correct: '改错题',
}

const levels = ['全部', ...bookLevels]

type ExerciseMode = 'sequential' | 'random' | 'wrong'

const MODE_STORAGE_KEY = 'el-grammar-exercise-mode'

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ')
}

function isCorrect(ex: GrammarExercise, userAnswer: string): boolean {
  const normalized = normalize(userAnswer)
  if (!normalized) return false
  const acceptable = ex.answer.split('/').map(normalize)
  return acceptable.includes(normalized)
}

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export default function GrammarExercises() {
  const [selectedLevel, setSelectedLevel] = useState<string>('全部')
  const [selectedLesson, setSelectedLesson] = useState<string>('全部')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({})
  const [exerciseMode, setExerciseMode] = useState<ExerciseMode>(() => {
    try {
      const saved = localStorage.getItem(MODE_STORAGE_KEY)
      if (saved === 'sequential' || saved === 'random' || saved === 'wrong') return saved
    } catch {
      // ignore
    }
    return 'sequential'
  })
  const [wrongCount, setWrongCount] = useState(0)
  const [shuffleTick, setShuffleTick] = useState(0)
  const [wrongTick, setWrongTick] = useState(0)
  const [wrongQuestionMap, setWrongQuestionMap] = useState<Map<string, WrongQuestion>>(new Map())

  const wrongKeysRef = useRef<Set<string>>(new Set())
  const exerciseAreaRef = useRef<HTMLDivElement>(null)

  // --- Stable exercise key based on lessonId + question ---
  const getExerciseKey = useCallback((ex: GrammarExercise) => {
    return `${ex.lessonId}-${ex.question}`
  }, [])

  // --- Initial load from localStorage ---
  useEffect(() => {
    const saved = getAllAnswers()
    const ans: Record<string, string> = {}
    const sub: Record<string, boolean> = {}
    Object.entries(saved).forEach(([key, val]) => {
      ans[key] = val.answer
      sub[key] = true
    })
    setAnswers(ans)
    setSubmitted(sub)
    setWrongCount(getWrongCount())
  }, [])

  // --- Persist mode to localStorage ---
  useEffect(() => {
    try {
      localStorage.setItem(MODE_STORAGE_KEY, exerciseMode)
    } catch {
      // ignore
    }
  }, [exerciseMode])

  // --- Refresh wrong data when submitted changes ---
  useEffect(() => {
    setWrongCount(getWrongCount())
    const wrongList = getWrongQuestionList()
    const keySet = new Set<string>()
    const qMap = new Map<string, WrongQuestion>()
    wrongList.forEach((wq) => {
      const key = `${wq.lessonId}-${wq.question}`
      keySet.add(key)
      qMap.set(key, wq)
    })
    wrongKeysRef.current = keySet
    setWrongQuestionMap(qMap)
    setWrongTick((t) => t + 1)
  }, [submitted])

  // --- Filtered lessons ---
  const filteredLessons = useMemo(() => {
    if (selectedLevel === '全部') return grammarLessons
    return grammarLessons.filter((l) => l.bookLevel === selectedLevel)
  }, [selectedLevel])

  // --- Base filtered exercises (by level / lesson) ---
  const baseExercises = useMemo(() => {
    let list = grammarExercises
    const lessonIds = new Set(filteredLessons.map((l) => l.id))
    list = list.filter((e) => lessonIds.has(e.lessonId))
    if (selectedLesson !== '全部') {
      list = list.filter((e) => e.lessonId === selectedLesson)
    }
    return list
  }, [filteredLessons, selectedLesson])

  // --- Exercises with mode applied ---
  const exercises = useMemo(() => {
    let list = baseExercises

    if (exerciseMode === 'wrong') {
      list = list.filter((ex) => wrongKeysRef.current.has(getExerciseKey(ex)))
    }

    if (exerciseMode === 'random' && list.length > 0) {
      list = shuffleArray(list)
    }

    return list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseExercises, exerciseMode, shuffleTick, wrongTick, getExerciseKey])

  // --- Current wrong count within filtered exercises ---
  const currentWrongCount = useMemo(() => {
    let count = 0
    exercises.forEach((ex) => {
      if (wrongKeysRef.current.has(getExerciseKey(ex))) {
        count++
      }
    })
    return count
  }, [exercises, getExerciseKey])

  // --- Stats ---
  const stats = useMemo(() => {
    const total = exercises.length
    let done = 0
    let correct = 0
    exercises.forEach((ex) => {
      const key = getExerciseKey(ex)
      if (submitted[key]) {
        done++
        if (isCorrect(ex, answers[key] || '')) {
          correct++
        }
      }
    })
    const accuracy = done > 0 ? Math.round((correct / done) * 100) : 0
    return { total, done, correct, accuracy, wrong: currentWrongCount }
  }, [exercises, answers, submitted, currentWrongCount, getExerciseKey])

  const getLessonTitle = useCallback((id: string) => {
    const lesson = grammarLessons.find((l) => l.id === id)
    return lesson ? lesson.title : id
  }, [])

  // --- Get wrong info for a specific exercise from cached map ---
  const getWrongInfo = useCallback(
    (ex: GrammarExercise) => {
      const key = getExerciseKey(ex)
      const match = wrongQuestionMap.get(key)
      return match ? { isWrong: true, wrongCount: match.wrongCount } : { isWrong: false, wrongCount: 0 }
    },
    [wrongQuestionMap, getExerciseKey],
  )

  // --- Find first unsubmitted exercise index for keyboard shortcuts ---
  const firstUnsubmittedIdx = useMemo(() => {
    return exercises.findIndex((ex) => !submitted[getExerciseKey(ex)])
  }, [exercises, submitted, getExerciseKey])

  // --- Submit handler ---
  const handleSubmit = useCallback(
    (key: string, ex: GrammarExercise) => {
      const userAnswer = answers[key] || ''
      const correct = isCorrect(ex, userAnswer)

      setSubmitted((prev) => ({ ...prev, [key]: true }))

      // Persist answer
      saveAnswer(key, userAnswer, correct, ex.lessonId)

      // If wrong, save full question detail
      if (!correct) {
        setWrongQuestionDetail(key, {
          lessonId: ex.lessonId,
          question: ex.question,
          type: ex.type,
          userAnswer,
          correctAnswer: ex.answer,
          explanation: ex.explanation,
        })
      }

      // Refresh wrong count
      setWrongCount(getWrongCount())
    },
    [answers],
  )

  // --- Reset handler ---
  const handleReset = useCallback(() => {
    resetAllAnswers()
    setAnswers({})
    setSubmitted({})
    setSelectedLevel('全部')
    setSelectedLesson('全部')
    setWrongCount(0)
  }, [])

  // --- Mode change handler ---
  const handleModeChange = useCallback((mode: ExerciseMode) => {
    setExerciseMode(mode)
    setShuffleTick((t) => t + 1)
  }, [])

  // --- Reshuffle handler ---
  const handleReshuffle = useCallback(() => {
    setShuffleTick((t) => t + 1)
  }, [])

  // --- Check if keyboard event target is within the exercise area ---
  const isInExerciseArea = useCallback((e: KeyboardEvent) => {
    if (!exerciseAreaRef.current) return false
    return exerciseAreaRef.current.contains(e.target as Node)
  }, [])

  // --- Keyboard shortcuts ---
  // Number keys 1-4 for choice questions on the first unsubmitted exercise
  useHotkeys(
    '1,2,3,4',
    (e) => {
      if (!isInExerciseArea(e)) return
      if (firstUnsubmittedIdx < 0) return
      const ex = exercises[firstUnsubmittedIdx]
      if (ex.type !== 'choice' || !ex.options) return
      const options = ex.options
      const key = getExerciseKey(ex)
      if (submitted[key]) return
      const optIdx = parseInt(e.key, 10) - 1
      if (optIdx >= 0 && optIdx < options.length) {
        setAnswers((prev) => ({ ...prev, [key]: options[optIdx] }))
      }
    },
    { enableOnFormTags: false, preventDefault: true },
    [firstUnsubmittedIdx, exercises, submitted, getExerciseKey, isInExerciseArea],
  )

  // Enter to submit first unsubmitted exercise
  useHotkeys(
    'enter',
    (e) => {
      if (!isInExerciseArea(e)) return
      if (firstUnsubmittedIdx < 0) return
      const ex = exercises[firstUnsubmittedIdx]
      const key = getExerciseKey(ex)
      if (submitted[key]) return
      const userAnswer = answers[key] || ''
      if (!userAnswer.trim()) return
      // For fill/correct types, Enter is handled by input onKeyDown
      // For choice type, handle via hotkey
      if (ex.type === 'choice') {
        handleSubmit(key, ex)
      }
    },
    { enableOnFormTags: false, preventDefault: true },
    [firstUnsubmittedIdx, exercises, submitted, answers, handleSubmit, getExerciseKey, isInExerciseArea],
  )

  return (
    <div className="flex h-full min-h-0 gap-4">
      {/* Sidebar */}
      <aside className="customized-scrollbar flex w-52 flex-shrink-0 flex-col overflow-y-auto">
        <div className="mb-2 flex items-center gap-2 px-2">
          <IconChart className="text-lg text-indigo-500" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">筛选</span>
        </div>

        <div className="mb-3">
          <div className="mb-1 px-2 text-xs font-medium text-gray-400">级别</div>
          {levels.map((level) => (
            <button
              key={level}
              className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                selectedLevel === level
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
              }`}
              onClick={() => {
                setSelectedLevel(level)
                setSelectedLesson('全部')
              }}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="mb-2">
          <div className="mb-1 px-2 text-xs font-medium text-gray-400">课程</div>
          <button
            className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
              selectedLesson === '全部'
                ? 'bg-indigo-500 text-white'
                : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
            }`}
            onClick={() => setSelectedLesson('全部')}
          >
            全部课程
          </button>
          {filteredLessons.map((lesson) => (
            <button
              key={lesson.id}
              className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                selectedLesson === lesson.id
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
              }`}
              onClick={() => setSelectedLesson(lesson.id)}
            >
              <div className="truncate">{lesson.title}</div>
            </button>
          ))}
        </div>

        {/* Wrong Question Book in Sidebar */}
        <div className="mb-2 mt-2">
          <div className="mb-1 px-2 text-xs font-medium text-gray-400">错题本</div>
          <button
            className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
              exerciseMode === 'wrong'
                ? 'bg-rose-500 text-white'
                : 'text-rose-600 hover:bg-rose-100 dark:text-rose-400 dark:hover:bg-rose-900/30'
            }`}
            onClick={() => handleModeChange(exerciseMode === 'wrong' ? 'sequential' : 'wrong')}
          >
            <span className="flex items-center gap-2">
              <IconAlertCircle className="text-sm" />
              错题本
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                exerciseMode === 'wrong'
                  ? 'bg-white/20 text-white'
                  : 'bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-300'
              }`}
            >
              {wrongCount}
            </span>
          </button>
        </div>
      </aside>

      {/* Exercise Area */}
      <main ref={exerciseAreaRef} className="customized-scrollbar flex-1 overflow-y-auto pb-8">
        {/* Stats Bar */}
        <div className="my-card mb-4 rounded-xl px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span>共 {stats.total} 道题</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span>
                已做 <span className="font-medium text-indigo-500">{stats.done}</span>
                /{stats.total}
              </span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span>
                正确 <span className="font-medium text-green-500">{stats.correct}</span>
              </span>
              {stats.done > 0 && (
                <>
                  <span className="text-gray-300 dark:text-gray-600">|</span>
                  <span>
                    正确率{' '}
                    <span className="font-medium text-indigo-500">{stats.accuracy}%</span>
                  </span>
                </>
              )}
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="flex items-center gap-1 text-rose-500">
                <IconAlertCircle className="text-xs" />
                错题 {stats.wrong} 道
              </span>
            </div>
            <button
              className="flex items-center gap-1 rounded-lg px-3 py-1 text-xs text-indigo-500 transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
              onClick={handleReset}
            >
              <IconRefresh className="text-sm" />
              重置
            </button>
          </div>

          {/* Mode Switch */}
          <div className="mt-2 flex items-center gap-2 border-t border-gray-100 pt-2 dark:border-gray-700/50">
            <span className="text-xs text-gray-400">练习模式：</span>
            <div className="flex items-center gap-0.5 rounded-full bg-gray-100 p-0.5 dark:bg-gray-700/50">
              <button
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  exerciseMode === 'sequential'
                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-gray-800 dark:text-indigo-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                onClick={() => handleModeChange('sequential')}
              >
                顺序
              </button>
              <button
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  exerciseMode === 'random'
                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-gray-800 dark:text-indigo-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                onClick={() => handleModeChange('random')}
              >
                随机
              </button>
              <button
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  exerciseMode === 'wrong'
                    ? 'bg-white text-rose-500 shadow-sm dark:bg-gray-800 dark:text-rose-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                onClick={() => handleModeChange('wrong')}
              >
                错题重练
              </button>
            </div>
            {exerciseMode === 'random' && (
              <button
                className="rounded-full px-2 py-1 text-xs text-indigo-500 transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                onClick={handleReshuffle}
              >
                重新打乱
              </button>
            )}
          </div>
        </div>

        {exercises.length === 0 ? (
          <div className="my-card flex flex-col items-center rounded-xl py-12">
            <IconAlertCircle className="mb-3 text-4xl text-gray-300 dark:text-gray-600" />
            <p className="text-sm text-gray-400">
              {exerciseMode === 'wrong' ? '暂无错题，继续保持！' : '该筛选条件下暂无练习题'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {exercises.map((ex, idx) => {
              const key = getExerciseKey(ex)
              const userAnswer = answers[key] || ''
              const isSubmitted = submitted[key] || false
              const correct = isCorrect(ex, userAnswer)
              const wrongInfo = getWrongInfo(ex)
              const isFirstUnsubmitted = idx === firstUnsubmittedIdx

              return (
                <div
                  key={key}
                  className="my-card rounded-xl p-4"
                >
                  {/* Header */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-medium text-white">
                      {idx + 1}
                    </span>
                    <span className="rounded bg-purple-100 px-1.5 py-0.5 text-[10px] font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                      {typeLabels[ex.type]}
                    </span>
                    <span className="text-[10px] text-gray-400">{getLessonTitle(ex.lessonId)}</span>
                    {wrongInfo.isWrong && !correct && (
                      <span className="ml-auto flex items-center gap-1 rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-medium text-rose-600 dark:bg-rose-900/50 dark:text-rose-300">
                        <IconAlertCircle className="text-[10px]" />
                        错题本 · 错 {wrongInfo.wrongCount} 次
                      </span>
                    )}
                  </div>

                  {/* Question */}
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-200">{ex.question}</p>

                  {/* Answer Area */}
                  {ex.type === 'choice' && ex.options ? (
                    <div className="space-y-1.5">
                      {ex.options.map((opt, optIdx) => {
                        const selected = userAnswer === opt
                        const showCorrect = isSubmitted && opt === ex.answer
                        const showWrong = isSubmitted && selected && opt !== ex.answer
                        return (
                          <button
                            key={opt}
                            disabled={isSubmitted}
                            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                              showCorrect
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                : showWrong
                                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
                                  : selected
                                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                            }`}
                            onClick={() => !isSubmitted && setAnswers((p) => ({ ...p, [key]: opt }))}
                          >
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-gray-200 text-[10px] font-medium text-gray-400 dark:border-gray-600">
                              {optIdx + 1}
                            </span>
                            <span className="flex-1 text-left">{opt}</span>
                            {showCorrect && <IconCheck className="text-sm text-green-500" />}
                            {showWrong && <IconX className="text-sm text-rose-500" />}
                          </button>
                        )
                      })}
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        value={userAnswer}
                        disabled={isSubmitted}
                        placeholder={ex.type === 'fill' ? '输入答案...' : '输入改正后的句子...'}
                        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors ${
                          isSubmitted
                            ? correct
                              ? 'border-green-300 bg-green-50 text-green-700 dark:border-green-700 dark:bg-green-900/20 dark:text-green-300'
                              : 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-700 dark:bg-rose-900/20 dark:text-rose-300'
                            : 'border-gray-200 bg-white text-gray-700 focus:border-indigo-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200'
                        }`}
                        onChange={(e) => setAnswers((p) => ({ ...p, [key]: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !isSubmitted && userAnswer.trim()) {
                            e.preventDefault()
                            handleSubmit(key, ex)
                          }
                        }}
                      />
                    </div>
                  )}

                  {/* Submit Button */}
                  {!isSubmitted && (
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        className="rounded-lg bg-indigo-500 px-4 py-1 text-xs text-white transition-colors hover:bg-indigo-600 disabled:opacity-50"
                        disabled={!userAnswer.trim()}
                        onClick={() => handleSubmit(key, ex)}
                      >
                        提交答案
                      </button>
                      {isFirstUnsubmitted && ex.type === 'choice' && (
                        <span className="text-[10px] text-gray-400">快捷键：1-4 选择，Enter 提交</span>
                      )}
                    </div>
                  )}

                  {/* Explanation */}
                  {isSubmitted && (
                    <div className={`mt-2 rounded-lg px-3 py-2 text-xs ${
                      correct
                        ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400'
                    }`}>
                      {correct ? '正确！' : `正确答案：${ex.answer}`}
                      <span className="ml-2 text-gray-500 dark:text-gray-400">{ex.explanation}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
