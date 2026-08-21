import Layout from '@/components/Layout'
import Header from '@/components/Header'
import ConversationExercises from './ConversationExercises'
import { allScenarioExercises, scenarioGroups } from './data'
import { getStats, getWrongCount } from './conversationProgress'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import IconArrowLeft from '~icons/tabler/arrow-left'
import IconMessage from '~icons/tabler/message-2'
import IconChart from '~icons/tabler/chart-bar'
import IconCheck from '~icons/tabler/check'
import IconAlertCircle from '~icons/tabler/alert-circle'

export default function ConversationPage() {
  const [stats, setStats] = useState(() => getStats())
  const [wrongCount, setWrongCount] = useState(() => getWrongCount())

  useEffect(() => {
    const handler = () => {
      setStats(getStats())
      setWrongCount(getWrongCount())
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  const totalExercises = allScenarioExercises.length
  const accuracy = stats.totalDone > 0 ? Math.round((stats.totalCorrect / stats.totalDone) * 100) : 0

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

      {/* Title & Stats */}
      <div className="w-full max-w-5xl px-4">
        <div className="my-card rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="gradient-text text-2xl font-bold">场景对话练习</h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                覆盖 {scenarioGroups.length} 个日常场景，共 {totalExercises} 道选择题
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500">{stats.totalDone}</div>
                <div className="text-[10px] text-gray-400">已练习</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{stats.totalCorrect}</div>
                <div className="text-[10px] text-gray-400">正确</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500">{accuracy}%</div>
                <div className="text-[10px] text-gray-400">正确率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500">{wrongCount}</div>
                <div className="text-[10px] text-gray-400">错题</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Area */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 px-4">
        <ConversationExercises />
      </div>
    </Layout>
  )
}
