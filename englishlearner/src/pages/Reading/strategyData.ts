import type { ReadingQuestion, QuestionType } from './readingData'

type Strategy = {
  label: string
  /** Tailwind 颜色名（用于徽章 class） */
  color: 'sky' | 'emerald' | 'indigo' | 'amber' | 'rose'
  clue: string
  steps: [string, string, string]
  pitfall: string
}

export const strategyData: Record<QuestionType, Strategy> = {
  detail: {
    label: '细节理解',
    color: 'sky',
    clue: '选项与原文有同义替换，题干预告 when / where / who / what / how many 等具体信息。',
    steps: [
      '回原文定位关键词（时间、人名、数字）',
      '找选项的同义替换，避开"原词照搬"',
      '排除无关信息与反向选项',
    ],
    pitfall: '不要凭印象选，必须回到原文对应位置核对。',
  },
  main: {
    label: '主旨大意',
    color: 'emerald',
    clue: '题干含 mainly about / best title / main idea / purpose / topic，问文章整体在讲什么。',
    steps: [
      '找段落首尾句、转折/总结句',
      '概括多段共性，避免"以偏概全"',
      '排除过于宽泛或只覆盖局部细节的选项',
    ],
    pitfall: '不要被某一具体细节带偏，要选能"概括全文"的选项。',
  },
  infer: {
    label: '推断题',
    color: 'indigo',
    clue: '题干含 infer / suggest / imply / can we conclude / probably / most likely，要求从文中推出隐含信息。',
    steps: [
      '不要找原话，要推合理结论',
      '依据原文线索（语气、对比、举例）',
      '排除绝对化（always/never）或与原文冲突的选项',
    ],
    pitfall: '推断 ≠ 凭空猜测，必须有原文依据；也不能"过度推断"到原文明示的内容。',
  },
  vocab: {
    label: '猜词题',
    color: 'amber',
    clue: '题干含 means / refers to / the word … means / by … the author means，问生词在文中的含义。',
    steps: [
      '看上下文线索（对比、因果、举例、并列）',
      '用"代入法"把选项放回原句验证',
      '排除字面义或与语境无关的选项',
    ],
    pitfall: '猜的是"文中含义"，不是词典里最常见的那个义项。',
  },
  attitude: {
    label: '态度观点',
    color: 'rose',
    clue: "题干含 author's attitude / tone / feel about / view on，问作者对某事的态度或观点。",
    steps: [
      '找情感形容词/副词（fortunately/unfortunately/should/remarkable 等）',
      '区分褒义、贬义、中立、讽刺',
      '排除与作者立场相反的选项',
    ],
    pitfall: '中性事实陈述不等于"中立态度"；要区分作者"描述什么"和"怎么看"。',
  },
}

const colorClassMap: Record<Strategy['color'], { badge: string; ring: string; panel: string }> = {
  sky: {
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
    ring: 'ring-sky-300 dark:ring-sky-700',
    panel: 'bg-amber-50/80 dark:bg-amber-900/10',
  },
  emerald: {
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    ring: 'ring-emerald-300 dark:ring-emerald-700',
    panel: 'bg-amber-50/80 dark:bg-amber-900/10',
  },
  indigo: {
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    ring: 'ring-indigo-300 dark:ring-indigo-700',
    panel: 'bg-amber-50/80 dark:bg-amber-900/10',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    ring: 'ring-amber-300 dark:ring-amber-700',
    panel: 'bg-amber-50/80 dark:bg-amber-900/10',
  },
  rose: {
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    ring: 'ring-rose-300 dark:ring-rose-700',
    panel: 'bg-amber-50/80 dark:bg-amber-900/10',
  },
}

export function getColorClasses(type: QuestionType) {
  return colorClassMap[strategyData[type].color]
}

/**
 * 启发式题型分类 —— 当 ReadingQuestion.type 未显式标注时使用。
 * 基于题干关键词与首词特征判断；fallback 为 'detail'。
 */
export function classifyQuestion(q: ReadingQuestion): QuestionType {
  if (q.type) return q.type
  const text = q.question.toLowerCase()

  if (/\b(infer|suggest|imply|implied|most likely|can we conclude|it can be concluded)\b/.test(text)) {
    return 'infer'
  }
  if (/\b(main(ly)?|best title|main idea|main purpose|topic of the (passage|article)|what is the passage (mainly )?about)\b/.test(text)) {
    return 'main'
  }
  if (/\b(the word|by .* the author means|refers to|is closest in meaning to|means)\b/.test(text)) {
    return 'vocab'
  }
  if (/\b(author'?s? (attitude|tone|view|opinion)|feel(s)? about|tone of the (passage|article))\b/.test(text)) {
    return 'attitude'
  }
  return 'detail'
}
