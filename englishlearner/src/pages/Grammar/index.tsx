import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconBook from '~icons/tabler/book'
import IconBulb from '~icons/tabler/bulb'
import IconAlert from '~icons/tabler/alert-triangle'
import IconList from '~icons/tabler/list'
import IconArrowLeft from '~icons/tabler/arrow-left'
import IconBooks from '~icons/tabler/books'
import IconPencil from '~icons/tabler/pencil'
import IconCheck from '~icons/tabler/check'
import IconClock from '~icons/tabler/clock'
import IconPlay from '~icons/tabler/player-play'
import { type GrammarLesson, bookLevels, grammarCategories, grammarLessons, levelColors } from './grammarData'
import { type LessonProgress, getAllLessonProgress, markLessonViewed } from './grammarProgress'
import { grammarExercises } from './exerciseData'
import ReferenceBooks from './ReferenceBooks'
import GrammarExercises from './GrammarExercises'

const difficultyColors: Record<string, string> = {
  基础: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  进阶: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  高级: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300',
}

type Tab = 'lessons' | 'exercises' | 'books'

function GrammarContent({ lesson, onStartExercise, progress }: { lesson: GrammarLesson; onStartExercise: () => void; progress?: LessonProgress }) {
  const totalEx = progress?.exerciseCount || 0
  const correctEx = progress?.correctCount || 0
  const progressPct = totalEx > 0 ? Math.min(100, Math.round((correctEx / totalEx) * 100)) : 0
  const isCompleted = progress?.completed || (totalEx > 0 && correctEx >= totalEx)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{lesson.title}</h2>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColors[lesson.difficulty]}`}>
            {lesson.difficulty}
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColors[lesson.bookLevel]}`}>
            {lesson.bookLevel}
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
              <IconCheck className="text-[10px]" />
              已完成
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{lesson.summary}</p>
        <p className="mt-0.5 text-xs text-gray-400">{lesson.bookSource} · {lesson.unit}</p>
      </div>

      <div className="my-card rounded-xl p-5">
        <div className="mb-3 flex items-center gap-2">
          <IconBook className="text-lg text-indigo-500" />
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">语法讲解</h3>
        </div>
        <ul className="space-y-2">
          {lesson.explanation.map((text, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-400" />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-card rounded-xl p-5">
        <div className="mb-3 flex items-center gap-2">
          <IconList className="text-lg text-indigo-500" />
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">例句</h3>
        </div>
        <div className="space-y-3">
          {lesson.examples.map((ex, i) => (
            <div key={i} className="border-l-2 border-indigo-300 pl-3 dark:border-indigo-600">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{ex.sentence}</p>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{ex.translation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-card rounded-xl p-5">
        <div className="mb-3 flex items-center gap-2">
          <IconBulb className="text-lg text-amber-500" />
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">语法规则</h3>
        </div>
        <ul className="space-y-2">
          {lesson.rules.map((rule, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              <span className="flex-shrink-0 font-semibold text-amber-500">{i + 1}.</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-card rounded-xl border border-rose-200 bg-rose-50/80 p-5 dark:border-rose-800/50 dark:bg-rose-900/20">
        <div className="mb-3 flex items-center gap-2">
          <IconAlert className="text-lg text-rose-500" />
          <h3 className="text-base font-semibold text-rose-700 dark:text-rose-300">常见错误</h3>
        </div>
        <ul className="space-y-2">
          {lesson.commonMistakes.map((mistake, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-rose-400" />
              {mistake}
            </li>
          ))}
        </ul>
      </div>

      {/* Start Exercise Card */}
      <div className="my-card rounded-xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <IconPencil className="text-lg text-indigo-500" />
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">随堂练习</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">
              {totalEx > 0
                ? `共 ${totalEx} 道练习题 · 已完成 ${correctEx}/${totalEx}（${progressPct}%）`
                : '暂无练习题'}
            </p>
          </div>
          <button
            onClick={onStartExercise}
            disabled={totalEx === 0}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg disabled:opacity-50"
          >
            <IconPlay className="text-xs" />
            {isCompleted ? '再练一次' : '开始练习'}
          </button>
        </div>
        {totalEx > 0 && (
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            <div
              className={`h-full rounded-full transition-all ${
                isCompleted ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default function GrammarPage() {
  const [tab, setTab] = useState<Tab>('lessons')
  const [selectedLevel, setSelectedLevel] = useState<string>('全部')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLessonId, setSelectedLessonId] = useState<string>(grammarLessons[0].id)
  const [lessonProgress, setLessonProgress] = useState<Record<string, LessonProgress>>({})

  // Load progress on mount
  useEffect(() => {
    setLessonProgress(getAllLessonProgress())
  }, [tab])

  // Exercise count per lesson
  const exerciseCountMap = useMemo(() => {
    const map: Record<string, number> = {}
    grammarExercises.forEach((ex) => {
      map[ex.lessonId] = (map[ex.lessonId] || 0) + 1
    })
    return map
  }, [])

  const filteredByLevel = useMemo(() => {
    if (selectedLevel === '全部') return grammarLessons
    return grammarLessons.filter((l) => l.bookLevel === selectedLevel)
  }, [selectedLevel])

  const filteredLessons = useMemo(() => {
    let list = filteredByLevel
    if (selectedCategory) {
      list = list.filter((l) => l.category === selectedCategory)
    }
    return list
  }, [filteredByLevel, selectedCategory])

  const selectedLesson = grammarLessons.find((l) => l.id === selectedLessonId) ?? grammarLessons[0]

  // Continue learning - most recent in-progress lesson
  const continueLesson = useMemo(() => {
    const inProgress = Object.values(lessonProgress)
      .filter((p) => !p.completed && p.lastViewed)
      .sort((a, b) => b.lastViewed - a.lastViewed)
    if (inProgress.length > 0) {
      return grammarLessons.find((l) => l.id === inProgress[0].id) || null
    }
    return null
  }, [lessonProgress])

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level)
    setSelectedCategory(null)
    const first = level === '全部' ? grammarLessons[0] : grammarLessons.find((l) => l.bookLevel === level)
    if (first) setSelectedLessonId(first.id)
  }

  const handleSelectLesson = useCallback((id: string) => {
    setSelectedLessonId(id)
    const count = exerciseCountMap[id] || 0
    markLessonViewed(id, count)
    setLessonProgress(getAllLessonProgress())
  }, [exerciseCountMap])

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

      {/* Tab Switcher */}
      <div className="w-full max-w-5xl px-4">
        <div className="my-card inline-flex gap-1 rounded-xl p-1">
          <button
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              tab === 'lessons'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                : 'text-gray-600 hover:text-indigo-500 dark:text-gray-300'
            }`}
            onClick={() => setTab('lessons')}
          >
            <IconBook className="text-base" />
            语法课程
          </button>
          <button
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              tab === 'exercises'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                : 'text-gray-600 hover:text-indigo-500 dark:text-gray-300'
            }`}
            onClick={() => setTab('exercises')}
          >
            <IconPencil className="text-base" />
            语法练习
          </button>
          <button
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              tab === 'books'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                : 'text-gray-600 hover:text-indigo-500 dark:text-gray-300'
            }`}
            onClick={() => setTab('books')}
          >
            <IconBooks className="text-base" />
            参考书籍
          </button>
        </div>
      </div>

      {tab === 'lessons' ? (
        <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4">
          {/* Book Level Filter */}
          <aside className="flex w-48 flex-shrink-0 flex-col gap-1">
            <div className="mb-2 flex items-center gap-2 px-2">
              <IconBooks className="text-lg text-indigo-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">书籍级别</span>
            </div>
            {['全部', ...bookLevels].map((level) => (
              <button
                key={level}
                className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selectedLevel === level
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
                }`}
                onClick={() => handleLevelChange(level)}
              >
                {level}
              </button>
            ))}

            <div className="mb-2 mt-4 flex items-center gap-2 px-2">
              <IconBook className="text-lg text-indigo-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">语法分类</span>
            </div>
            <button
              className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                selectedCategory === null
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              全部
            </button>
            {grammarCategories.map((cat) => (
              <button
                key={cat}
                className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selectedCategory === cat
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </aside>

          {/* Lesson List */}
          <aside className="customized-scrollbar flex w-56 flex-shrink-0 flex-col gap-1 overflow-y-auto">
            {/* Continue Learning Card */}
            {continueLesson && (
              <div className="mb-3">
                <div className="mb-1 flex items-center gap-2 px-2">
                  <IconClock className="text-sm text-amber-500" />
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">继续学习</span>
                </div>
                <button
                  className="my-card flex w-full items-center gap-2 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-2 text-left transition-all hover:shadow-md dark:from-amber-900/20 dark:to-orange-900/20"
                  onClick={() => handleSelectLesson(continueLesson.id)}
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                    <IconPlay className="text-xs" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-gray-800 dark:text-gray-100">{continueLesson.title}</div>
                    <div className="text-[10px] text-amber-600 dark:text-amber-400">上次学习 · {new Date(lessonProgress[continueLesson.id]?.lastViewed || 0).toLocaleDateString('zh-CN')}</div>
                  </div>
                </button>
              </div>
            )}

            <div className="mb-2 flex items-center gap-2 px-2">
              <IconList className="text-lg text-indigo-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">课程列表</span>
            </div>
            {filteredLessons.length === 0 ? (
              <p className="py-4 text-center text-xs text-gray-400">无匹配课程</p>
            ) : (
              filteredLessons.map((lesson) => {
                const progress = lessonProgress[lesson.id]
                const totalEx = exerciseCountMap[lesson.id] || 0
                const correctEx = progress?.correctCount || 0
                const isCompleted = progress?.completed || (totalEx > 0 && correctEx >= totalEx)
                const isStarted = !!progress
                const progressPct = totalEx > 0 ? Math.min(100, Math.round((correctEx / totalEx) * 100)) : 0
                return (
                <button
                  key={lesson.id}
                  className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    selectedLessonId === lesson.id
                      ? 'bg-indigo-500 text-white'
                      : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
                  }`}
                  onClick={() => handleSelectLesson(lesson.id)}
                >
                  <div className="flex items-center gap-1.5">
                    {isCompleted && (
                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                        <IconCheck className="text-[10px]" />
                      </span>
                    )}
                    <div className="flex-1 truncate">{lesson.title}</div>
                  </div>
                  <div className={`mt-0.5 flex items-center gap-1.5 text-xs ${selectedLessonId === lesson.id ? 'text-indigo-100' : 'text-gray-400'}`}>
                    <span className={`rounded px-1 py-0.5 text-[9px] ${selectedLessonId === lesson.id ? 'bg-white/20' : levelColors[lesson.bookLevel]}`}>
                      {lesson.bookLevel}
                    </span>
                    <span className="truncate">{lesson.category}</span>
                  </div>
                  {isStarted && totalEx > 0 && (
                    <div className="mt-1">
                      <div className="h-1 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                        <div
                          className={`h-full rounded-full transition-all ${
                            selectedLessonId === lesson.id
                              ? 'bg-white'
                              : isCompleted
                                ? 'bg-green-500'
                                : 'bg-indigo-400'
                          }`}
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                      <div className={`mt-0.5 text-[10px] ${selectedLessonId === lesson.id ? 'text-indigo-100' : 'text-gray-400'}`}>
                        {correctEx}/{totalEx} 题 · {progressPct}%
                      </div>
                    </div>
                  )}
                </button>
              )})
            )}
          </aside>

          {/* Main Content */}
          <main className="customized-scrollbar flex-1 overflow-y-auto pb-8">
            <GrammarContent
              lesson={selectedLesson}
              progress={lessonProgress[selectedLesson.id]}
              onStartExercise={() => {
                setTab('exercises')
              }}
            />
          </main>
        </div>
      ) : tab === 'exercises' ? (
        <div className="mx-auto flex w-full max-w-6xl flex-1 px-4">
          <GrammarExercises />
        </div>
      ) : (
        <div className="mx-auto flex w-full max-w-6xl flex-1 gap-5 px-4 pb-2">
          <ReferenceBooks />
        </div>
      )}
    </Layout>
  )
}
