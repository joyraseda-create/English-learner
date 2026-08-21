export type GrammarExample = {
  sentence: string
  translation: string
}

export type GrammarLesson = {
  id: string
  title: string
  category: string
  bookLevel: '初级' | '中级' | '高级'
  difficulty: '基础' | '进阶' | '高级'
  bookSource: string
  unit: string
  summary: string
  explanation: string[]
  examples: GrammarExample[]
  rules: string[]
  commonMistakes: string[]
}

export type GrammarExercise = {
  lessonId: string
  type: 'choice' | 'fill' | 'correct'
  question: string
  options?: string[]
  answer: string
  explanation: string
}

export const levelColors: Record<string, string> = {
  初级: 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300',
  中级: 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300',
  高级: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300',
  综合: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  全套: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
}

export const grammarCategories = ['时态', '从句', '词法', '句法', '虚拟语气', '非谓语', '代词', '介词', '连词', '形容词与副词', '名词', '被动语态']

export const bookLevels = ['初级', '中级', '高级'] as const

// 课程数据已按级别拆分到 data/ 目录，此处合并导出以保持向后兼容
export { grammarLessons } from './data/index'
