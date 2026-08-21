// 类型导出
export type { GrammarLesson, GrammarExercise, GrammarExample } from '../grammarData'

// 常量导出
export { levelColors, grammarCategories, bookLevels } from '../grammarData'

// 分级课程数据
export { beginnerLessons } from './lessonsBeginner'
export { intermediateLessons } from './lessonsIntermediate'
export { advancedLessons } from './lessonsAdvanced'

// 分级练习数据
export { beginnerExercises } from './exercisesBeginner'
export { intermediateExercises } from './exercisesIntermediate'
export { advancedExercises } from './exercisesAdvanced'

// 合并后的课程数据
import { beginnerLessons } from './lessonsBeginner'
import { intermediateLessons } from './lessonsIntermediate'
import { advancedLessons } from './lessonsAdvanced'

export const grammarLessons = [...beginnerLessons, ...intermediateLessons, ...advancedLessons]

// 合并后的练习数据
import { beginnerExercises } from './exercisesBeginner'
import { intermediateExercises } from './exercisesIntermediate'
import { advancedExercises } from './exercisesAdvanced'

export const grammarExercises = [...beginnerExercises, ...intermediateExercises, ...advancedExercises]
