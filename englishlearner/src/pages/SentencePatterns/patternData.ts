export type TransformationType =
  | 'negative'
  | 'question'
  | 'past'
  | 'passive'
  | 'present_perfect'
  | 'comparative'
  | 'emphasis'
  | 'indirect_speech'
  | 'conditional'
  | 'inversion'

export type Transformation = {
  type: TransformationType
  instruction: string
  answer: string
  hint?: string
}

export type SentencePattern = {
  id: string
  level: 1 | 2 | 3
  grammarPoint: string
  structure: string
  tip: string
  sentence: string
  sentenceTrans: string
  transformations: Transformation[]
}

export type ErrorCorrection = {
  id: string
  level: 1 | 2 | 3
  grammarPoint: string
  wrongSentence: string
  correctSentence: string
  explanation: string
  errorCount: number
}

export type TestQuestion = {
  id: string
  level: 1 | 2 | 3
  grammarPoint: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}
