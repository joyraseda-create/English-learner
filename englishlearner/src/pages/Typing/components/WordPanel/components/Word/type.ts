import type { LetterState } from './Letter'
import type { LetterMistakes } from '@/utils/db/record'

export type WordState = {
  displayWord: string
  inputWord: string
  letterStates: LetterState[]
  isFinished: boolean
  // 是否出现输入错误
  hasWrong: boolean
  // 记录是否已经出现过输入错误
  hasMadeInputWrong: boolean
  // 用户输入错误的次数
  wrongCount: number
  startTime: string
  endTime: string
  correctCount: number
  letterTimeArray: number[]
  letterMistake: LetterMistakes
  // 用于随机隐藏字母功能
  randomLetterVisible: boolean[]
}

export const initialWordState: WordState = {
  displayWord: '',
  inputWord: '',
  letterStates: [],
  isFinished: false,
  hasWrong: false,
  hasMadeInputWrong: false,
  wrongCount: 0,
  startTime: '',
  endTime: '',
  correctCount: 0,
  letterTimeArray: [],
  letterMistake: {},
  randomLetterVisible: [],
}
