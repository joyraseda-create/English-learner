import type { SentencePattern, ErrorCorrection, TestQuestion } from '../patternData'
import { level1Patterns } from './level1'
import { level2Patterns } from './level2'
import { level3Patterns } from './level3'
import { errorCorrections } from './errorCorrections'
import { stageTests } from './stageTests'

export const allPatterns: SentencePattern[] = [...level1Patterns, ...level2Patterns, ...level3Patterns]

export const levelGroups: { level: 1 | 2 | 3; title: string; subtitle: string; patterns: SentencePattern[] }[] = [
  {
    level: 1,
    title: '基础句型',
    subtitle: '掌握基本时态和句型结构',
    patterns: level1Patterns,
  },
  {
    level: 2,
    title: '进阶句型',
    subtitle: '完成时、被动语态、比较级、情态动词',
    patterns: level2Patterns,
  },
  {
    level: 3,
    title: '高级句型',
    subtitle: '从句、虚拟语气、倒装、强调句',
    patterns: level3Patterns,
  },
]

export const levelTests: { level: 1 | 2 | 3; title: string; questions: TestQuestion[] }[] = [
  {
    level: 1,
    title: '基础句型测试',
    questions: stageTests.filter((q) => q.level === 1),
  },
  {
    level: 2,
    title: '进阶句型测试',
    questions: stageTests.filter((q) => q.level === 2),
  },
  {
    level: 3,
    title: '高级句型测试',
    questions: stageTests.filter((q) => q.level === 3),
  },
]

export { errorCorrections, stageTests }
export type { SentencePattern, ErrorCorrection, TestQuestion }
