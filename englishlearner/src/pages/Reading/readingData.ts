export type VocabItem = {
  word: string
  phonetic?: string
  meaning: string
}

export type PhraseItem = {
  text: string
  meaning: string
}

export type ReadingQuestion = {
  id: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export type ReadingItem = {
  id: string
  level: 1 | 2 | 3
  serial: number
  category: string
  title: string
  passage: string
  vocabulary: VocabItem[]
  phrases: PhraseItem[]
  questions: ReadingQuestion[]
}

export const readingLevels: { level: 1 | 2 | 3; title: string; subtitle: string }[] = [
  { level: 1, title: '初级', subtitle: '简单短文，基础词汇与句型（适合小学阶段）' },
  { level: 2, title: '中级', subtitle: '中等难度，常见话题（适合初中阶段）' },
  { level: 3, title: '高级', subtitle: '复杂文章，学术与思辨内容（适合高中及大学阶段）' },
]

// 每个级别提供的主题分类，方便前端做 chip 过滤
export const readingCategories: Record<1 | 2 | 3, string[]> = {
  1: [
    '家庭',
    '学校',
    '朋友',
    '动物',
    '食物',
    '自然',
    '兴趣',
    '节日',
    '运动',
    '日常生活',
  ],
  2: [
    '兴趣爱好',
    '旅行',
    '科技',
    '环境',
    '健康',
    '文化',
    '历史',
    '科学',
    '名人故事',
    '运动',
  ],
  3: [
    '科技前沿',
    '自然科学',
    '哲学思辨',
    '心理学',
    '经济学',
    '文化与社会',
    '环境与气候',
    '历史与文明',
    '教育',
    '艺术与文学',
  ],
}

import { readingData as l1 } from './data/level1'
import { readingData as l2 } from './data/level2'
import { readingData as l3 } from './data/level3'

export const readingData: ReadingItem[] = [...l1, ...l2, ...l3]