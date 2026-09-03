import { db } from '@/utils/db'
import type { IWordRecord } from '@/utils/db/record'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import type { Activity } from 'react-activity-calendar'

interface IWordStats {
  isEmpty?: boolean
  error?: string
  loading?: boolean
  exerciseRecord: Activity[]
  wordRecord: Activity[]
  wpmRecord: [string, number][]
  accuracyRecord: [string, number][]
  wrongTimeRecord: { name: string; value: number }[]
}

// 获取两个日期之间的所有日期，使用dayjs计算
function getDatesBetween(start: number, end: number) {
  const dates = []
  let curr = dayjs(start).startOf('day')
  const last = dayjs(end).endOf('day')

  while (curr.diff(last) < 0) {
    dates.push(curr.clone().format('YYYY-MM-DD'))
    curr = curr.add(1, 'day')
  }

  return dates
}

function getLevel(value: number) {
  if (value === 0) return 0
  else if (value < 4) return 1
  else if (value < 8) return 2
  else if (value < 12) return 3
  else return 4
}

export function useWordStats(startTimeStamp: number, endTimeStamp: number) {
  const [wordStats, setWordStats] = useState<IWordStats>({
    exerciseRecord: [],
    wordRecord: [],
    wpmRecord: [],
    accuracyRecord: [],
    wrongTimeRecord: [],
  })

  useEffect(() => {
    let cancelled = false
    const fetchWordStats = async () => {
      setWordStats((prev) => ({ ...prev, loading: true, error: undefined }))
      try {
        const stats = await getChapterStats(startTimeStamp, endTimeStamp)
        if (!cancelled) {
          setWordStats({ ...stats, loading: false })
        }
      } catch (e) {
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : '加载统计数据失败'
          setWordStats({
            isEmpty: true,
            error: msg,
            loading: false,
            exerciseRecord: [],
            wordRecord: [],
            wpmRecord: [],
            accuracyRecord: [],
            wrongTimeRecord: [],
          })
        }
      }
    }

    fetchWordStats()
    return () => {
      cancelled = true
    }
  }, [startTimeStamp, endTimeStamp])

  return wordStats
}

async function getChapterStats(startTimeStamp: number, endTimeStamp: number): Promise<IWordStats> {
  // indexedDB查找某个数字范围内的数据
  const records: IWordRecord[] = await db.wordRecords.where('timeStamp').between(startTimeStamp, endTimeStamp).toArray()

  if (records.length === 0) {
    return { isEmpty: true, exerciseRecord: [], wordRecord: [], wpmRecord: [], accuracyRecord: [], wrongTimeRecord: [] }
  }

  let data: {
    [x: string]: {
      exerciseTime: number //练习次数
      words: string[] //练习词数组（不去重）
      totalTime: number //总计用时
      wrongCount: number //错误次数
      wrongKeys: string[] //按错的按键
    }
  } = {}

  const dates = getDatesBetween(startTimeStamp * 1000, endTimeStamp * 1000)
  data = dates
    .map((date) => ({ [date]: { exerciseTime: 0, words: [], totalTime: 0, wrongCount: 0, wrongKeys: [] } }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})

  for (let i = 0; i < records.length; i++) {
    const date = dayjs(records[i].timeStamp * 1000).format('YYYY-MM-DD')

    data[date].exerciseTime = data[date].exerciseTime + 1
    data[date].words = [...data[date].words, records[i].word]
    data[date].totalTime = data[date].totalTime + records[i].timing.reduce((acc, curr) => acc + curr, 0)
    data[date].wrongCount = data[date].wrongCount + records[i].wrongCount
    data[date].wrongKeys = [...(data[date].wrongKeys || []), ...(Object.values(records[i].mistakes).flat() || [])]
  }

  const RecordArray = Object.entries(data)

  // 练习次数统计
  const exerciseRecord: IWordStats['exerciseRecord'] = RecordArray.map(([date, { exerciseTime }]) => ({
    date,
    count: exerciseTime,
    level: getLevel(exerciseTime),
  }))
  // 练习词数统计（按 dict + word 去重，避免同词不同词典释义被合并）
  const wordRecord: IWordStats['wordRecord'] = RecordArray.map(([date, { words }]) => {
    // 注：去重 key 改为 `${record.dict}:${record.word}` 更精准，但本 hook 仅持有 word 数组
    // 故这里标记为按词去重；后续若需按 dict 区分，可扩展 records 维度
    const uniqueCount = Array.from(new Set(words)).length
    return {
      date,
      count: uniqueCount,
      level: getLevel(uniqueCount),
    }
  })
  // wpm=练习词数（不去重）/总时间
  const wpmRecord: IWordStats['wpmRecord'] = RecordArray.map<[string, number]>(([date, { words, totalTime }]) => [
    date,
    Math.round(words.length / (totalTime / 1000 / 60)),
  ]).filter((d) => d[1])
  // 正确率=每个单词的长度合计/(每个单词的长度合计+总错误次数)
  const accuracyRecord: IWordStats['accuracyRecord'] = RecordArray.map<[string, number]>(([date, { words, wrongCount }]) => [
    date,
    Math.round((words.join('').length / (words.join('').length + wrongCount)) * 100),
  ]).filter((d) => d[1])
  // 错误次数统计
  const wrongTimeRecord: IWordStats['wrongTimeRecord'] = []
  const allWrongTime = RecordArray.map(([, { wrongKeys }]) => wrongKeys)
    .flat()
    .map((key) => key.toUpperCase())
  allWrongTime.forEach((key) => {
    const index = wrongTimeRecord.findIndex((item) => item.name === key)
    if (index === -1) {
      wrongTimeRecord.push({ name: key, value: 1 })
    } else {
      wrongTimeRecord[index].value++
    }
  })

  return { exerciseRecord, wordRecord, wpmRecord, accuracyRecord, wrongTimeRecord }
}
