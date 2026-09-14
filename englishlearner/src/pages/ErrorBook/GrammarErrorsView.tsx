import { grammarLessons } from '@/pages/Grammar/grammarData'
import { getWrongQuestionList, type WrongQuestion } from '@/pages/Grammar/grammarProgress'
import type { FC } from 'react'
import { useMemo } from 'react'

type GrammarErrorsViewProps = {
  reloadKey: number
}

type GroupedLesson = {
  lessonId: string
  lessonTitle: string
  level: string
  unit: string
  totalWrong: number
  lastWrongAt: number
  questions: WrongQuestion[]
}

const formatTime = (ts: number) => {
  if (!ts) return '-'
  const d = new Date(ts)
  if (Number.isNaN(d.getTime())) return '-'
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

const moduleNameByQuestionType: Record<WrongQuestion['type'], string> = {
  choice: '语法选择',
  fill: '语法填空',
  correct: '改错题',
}

const GrammarErrorsView: FC<GrammarErrorsViewProps> = ({ reloadKey }) => {
  const all = useMemo<WrongQuestion[]>(() => {
    // reloadKey is intentionally used to re-evaluate on parent reload
    void reloadKey
    return getWrongQuestionList()
  }, [reloadKey])

  const totalWrong = useMemo(() => all.reduce((acc, q) => acc + (q.wrongCount ?? 1), 0), [all])

  const lessonTitleMap = useMemo(() => {
    const map: Record<string, { title: string; level: string; unit: string }> = {}
    for (const lesson of grammarLessons) {
      map[lesson.id] = { title: lesson.title, level: lesson.bookLevel, unit: lesson.unit }
    }
    return map
  }, [])

  const groupedByLesson = useMemo<GroupedLesson[]>(() => {
    const groups: Record<string, GroupedLesson> = {}
    for (const q of all) {
      const meta = lessonTitleMap[q.lessonId]
      if (!groups[q.lessonId]) {
        groups[q.lessonId] = {
          lessonId: q.lessonId,
          lessonTitle: meta?.title ?? q.lessonId,
          level: meta?.level ?? '-',
          unit: meta?.unit ?? '-',
          totalWrong: 0,
          lastWrongAt: 0,
          questions: [],
        }
      }
      groups[q.lessonId].questions.push(q)
      groups[q.lessonId].totalWrong += q.wrongCount ?? 1
      if (q.lastWrongAt > groups[q.lessonId].lastWrongAt) {
        groups[q.lessonId].lastWrongAt = q.lastWrongAt
      }
    }
    return Object.values(groups).sort((a, b) => b.totalWrong - a.totalWrong)
  }, [all, lessonTitleMap])

  const top10 = useMemo(() => groupedByLesson.slice(0, 10), [groupedByLesson])

  // Per-type aggregate: which exercise type fails most
  const typeStats = useMemo(() => {
    const map: Record<WrongQuestion['type'], { count: number; lessons: Set<string> }> = {
      choice: { count: 0, lessons: new Set() },
      fill: { count: 0, lessons: new Set() },
      correct: { count: 0, lessons: new Set() },
    }
    for (const q of all) {
      map[q.type].count += q.wrongCount ?? 1
      map[q.type].lessons.add(q.lessonId)
    }
    return map
  }, [all])

  if (all.length === 0) {
    return (
      <div className="my-card flex flex-col gap-2 px-6 py-10 text-center text-sm text-gray-400">
        暂无语法错题数据
        <span className="text-xs text-gray-400">在 Grammar 模块答错的题目会自动汇总到这里</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="my-card grid grid-cols-2 gap-4 px-6 py-5 text-black dark:text-white md:grid-cols-4">
        <div>
          <div className="text-xs text-gray-400">语法错题总数</div>
          <div className="mt-1 text-2xl font-semibold text-indigo-500">{all.length}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">累计错误次数</div>
          <div className="mt-1 text-2xl font-semibold text-rose-500">{totalWrong}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">涉及语法点</div>
          <div className="mt-1 text-2xl font-semibold">{groupedByLesson.length}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">最近错误</div>
          <div className="mt-1 text-sm text-gray-500">
            {formatTime(Math.max(...all.map((q) => q.lastWrongAt)))}
          </div>
        </div>
      </div>

      <div className="my-card flex flex-col gap-3 px-6 py-4 text-black dark:text-white">
        <div className="text-sm font-medium text-gray-500">题型分布</div>
        <div className="flex flex-wrap gap-3">
          {(Object.keys(typeStats) as WrongQuestion['type'][]).map((t) => (
            <div
              key={t}
              className="rounded-lg border border-gray-200 px-4 py-2 text-xs dark:border-gray-700"
            >
              <div className="font-medium">{moduleNameByQuestionType[t]}</div>
              <div className="mt-1 text-gray-400">
                {typeStats[t].count} 次 / 涉及 {typeStats[t].lessons.size} 个语法点
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-card flex flex-col gap-2 px-6 py-4 text-black dark:text-white">
        <div className="text-sm font-medium text-gray-500">高频错题语法点 Top 10</div>
        <div className="flex flex-col gap-2">
          {top10.map((g, idx) => (
            <div
              key={g.lessonId}
              className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 text-sm dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-medium">{g.lessonTitle}</div>
                  <div className="text-xs text-gray-400">
                    {g.level} · {g.unit} · 涉及 {g.questions.length} 道错题
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-right">
                <div>
                  <div className="text-xs text-gray-400">错误次数</div>
                  <div className="font-semibold text-rose-500">{g.totalWrong}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">最近错误</div>
                  <div className="text-xs text-gray-500">{formatTime(g.lastWrongAt)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GrammarErrorsView
