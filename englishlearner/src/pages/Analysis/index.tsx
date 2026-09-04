import HeatmapCharts from './components/HeatmapCharts'
import KeyboardWithBarCharts from './components/KeyboardWithBarCharts'
import LineCharts from './components/LineCharts'
import { useWordStats } from './hooks/useWordStats'
import Layout from '@/components/Layout'
import { isOpenDarkModeAtom } from '@/store'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import dayjs from 'dayjs'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useNavigate } from 'react-router-dom'
import '../a-minimal-global.css'

const Analysis = () => {
  const navigate = useNavigate()
  const [, setIsOpenDarkMode] = useAtom(isOpenDarkModeAtom)

  const onBack = useCallback(() => {
    navigate('/')
  }, [navigate])

  const changeDarkModeState = () => {
    setIsOpenDarkMode((old) => !old)
  }

  useHotkeys(
    'ctrl+d',
    () => {
      changeDarkModeState()
    },
    { enableOnFormTags: true, preventDefault: true },
    [],
  )

  useHotkeys('enter,esc', onBack, { preventDefault: true })

  const { isEmpty, loading, error, exerciseRecord, wordRecord, wpmRecord, accuracyRecord, wrongTimeRecord } =
    useWordStats(dayjs().subtract(1, 'year').unix(), dayjs().unix())

  return (
    <div className="a-minimal-page">
    <Layout>
      <div className="page-top-nav">
        <NavLink to="/">首页</NavLink>
        <span className="nav-sep">›</span>
        <span className="nav-current">统计</span>
      </div>
      <div className="flex w-full flex-1 flex-col overflow-y-auto pl-20 pr-20 pt-20">
        <button className="back-text absolute right-20 top-10" onClick={onBack}>返回</button>
        <ScrollArea.Root className="flex-1 overflow-y-auto">
          <ScrollArea.Viewport className="h-full w-auto pb-[20rem] [&>div]:!block">
            {error ? (
              <div className="align-items-center m-4 grid h-80 w-auto place-content-center overflow-hidden rounded-lg shadow-lg dark:bg-gray-600">
                <div className="text-2xl text-rose-400">加载失败：{error}</div>
              </div>
            ) : loading ? (
              <div className="align-items-center m-4 grid h-80 w-auto place-content-center overflow-hidden rounded-lg shadow-lg dark:bg-gray-600">
                <div className="text-2xl text-gray-400">加载中...</div>
              </div>
            ) : isEmpty ? (
              <div className="align-items-center m-4 grid h-80 w-auto place-content-center overflow-hidden rounded-lg shadow-lg dark:bg-gray-600">
                <div className="text-2xl text-gray-400">暂无练习数据</div>
              </div>
            ) : (
              <>
                <div className="mx-4 my-8 h-auto w-auto overflow-hidden rounded-lg p-8 shadow-lg dark:bg-gray-700 dark:bg-opacity-50">
                  <HeatmapCharts title="过去一年练习次数热力图" data={exerciseRecord} />
                </div>
                <div className="mx-4 my-8 h-auto w-auto overflow-hidden rounded-lg p-8 shadow-lg dark:bg-gray-700 dark:bg-opacity-50">
                  <HeatmapCharts title="过去一年练习词数热力图" data={wordRecord} />
                </div>
                <div className="mx-4 my-8 h-80 w-auto overflow-hidden rounded-lg p-8 shadow-lg dark:bg-gray-700 dark:bg-opacity-50">
                  <LineCharts title="过去一年WPM趋势图" name="WPM" data={wpmRecord} />
                </div>
                <div className="mx-4 my-8 h-80 w-auto overflow-hidden rounded-lg p-8 shadow-lg dark:bg-gray-700 dark:bg-opacity-50">
                  <LineCharts title="过去一年正确率趋势图" name="正确率(%)" data={accuracyRecord} suffix="%" />
                </div>
                <div className="mx-4 my-8 h-80 w-auto overflow-hidden rounded-lg p-8 shadow-lg dark:bg-gray-700 dark:bg-opacity-50">
                  <KeyboardWithBarCharts title="按键错误次数排行" name="错误次数" data={wrongTimeRecord} />
                </div>
              </>
            )}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar className="flex touch-none select-none bg-transparent " orientation="vertical"></ScrollArea.Scrollbar>
        </ScrollArea.Root>
        <div className="overflow-y-auto"></div>
      </div>
    </Layout>
    </div>
  )
}

export default Analysis
