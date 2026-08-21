// Grammar learning progress storage (localStorage based)

import { grammarExercises } from './exerciseData'

const STORAGE_PREFIX = 'el-grammar-'

export type ExerciseAnswer = {
  answer: string
  correct: boolean
  timestamp: number
}

export type LessonProgress = {
  id: string
  firstViewed: number
  lastViewed: number
  completed: boolean // all exercises correct
  exerciseCount: number
  correctCount: number
}

export type WrongQuestion = {
  lessonId: string
  question: string
  type: 'choice' | 'fill' | 'correct'
  userAnswer: string
  correctAnswer: string
  explanation: string
  wrongCount: number
  lastWrongAt: number
}

export type GrammarStats = {
  totalExercisesDone: number
  totalCorrect: number
  totalWrong: number
  studyDays: number
  lastStudyDate: string // YYYY-MM-DD
  todayExercises: number
  todayCorrect: number
}

const answersKey = `${STORAGE_PREFIX}answers`
const wrongKey = `${STORAGE_PREFIX}wrong`
const lessonsKey = `${STORAGE_PREFIX}lessons`
const statsKey = `${STORAGE_PREFIX}stats`
const pdfKey = `${STORAGE_PREFIX}pdf-progress`

function safeSetItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore
  }
}

// --- Exercise Answers ---

export function getAllAnswers(): Record<string, ExerciseAnswer> {
  try {
    return JSON.parse(localStorage.getItem(answersKey) || '{}')
  } catch {
    return {}
  }
}

export function saveAnswer(
  exerciseId: string,
  answer: string,
  correct: boolean,
  lessonId: string
) {
  const all = getAllAnswers()
  all[exerciseId] = { answer, correct, timestamp: Date.now() }
  safeSetItem(answersKey, JSON.stringify(all))

  // Update wrong question list
  if (!correct) {
    addWrongQuestion(exerciseId, lessonId, answer)
  } else {
    removeWrongQuestion(exerciseId)
  }

  // Update stats
  updateStats(correct)

  // Update lesson progress
  updateLessonProgress(lessonId, correct)
}

export function resetAllAnswers() {
  safeSetItem(answersKey, '{}')
  safeSetItem(wrongKey, '{}')
  // Also reset lesson progress correct counts
  const lessons = getAllLessonProgress()
  Object.keys(lessons).forEach((id) => {
    lessons[id].correctCount = 0
    lessons[id].completed = false
  })
  safeSetItem(lessonsKey, JSON.stringify(lessons))
  // Reset stats
  safeSetItem(statsKey, JSON.stringify(defaultStats()))
}

// --- Wrong Questions ---

export function getWrongQuestions(): Record<string, WrongQuestion> {
  try {
    return JSON.parse(localStorage.getItem(wrongKey) || '{}')
  } catch {
    return {}
  }
}

export function getWrongQuestionList(): WrongQuestion[] {
  return Object.values(getWrongQuestions()).sort((a, b) => b.lastWrongAt - a.lastWrongAt)
}

export function getWrongCount(): number {
  return Object.keys(getWrongQuestions()).length
}

function addWrongQuestion(
  exerciseId: string,
  lessonId: string,
  userAnswer: string
) {
  const all = getWrongQuestions()
  if (all[exerciseId]) {
    all[exerciseId].wrongCount += 1
    all[exerciseId].lastWrongAt = Date.now()
    all[exerciseId].userAnswer = userAnswer
  } else {
    // Create a minimal record for new wrong questions
    // setWrongQuestionDetail will fill in the remaining fields
    all[exerciseId] = {
      lessonId,
      question: '',
      type: 'choice',
      userAnswer,
      correctAnswer: '',
      explanation: '',
      wrongCount: 1,
      lastWrongAt: Date.now(),
    }
  }
  safeSetItem(wrongKey, JSON.stringify(all))
}

export function setWrongQuestionDetail(
  exerciseId: string,
  detail: Omit<WrongQuestion, 'wrongCount' | 'lastWrongAt'> & {
    wrongCount?: number
    lastWrongAt?: number
  }
) {
  const all = getWrongQuestions()
  const existing = all[exerciseId]
  all[exerciseId] = {
    ...detail,
    wrongCount: existing?.wrongCount ?? detail.wrongCount ?? 1,
    lastWrongAt: existing?.lastWrongAt ?? detail.lastWrongAt ?? Date.now(),
  }
  safeSetItem(wrongKey, JSON.stringify(all))
}

function removeWrongQuestion(exerciseId: string) {
  const all = getWrongQuestions()
  delete all[exerciseId]
  safeSetItem(wrongKey, JSON.stringify(all))
}

// --- Lesson Progress ---

export function getAllLessonProgress(): Record<string, LessonProgress> {
  try {
    return JSON.parse(localStorage.getItem(lessonsKey) || '{}')
  } catch {
    return {}
  }
}

export function getLessonProgress(id: string): LessonProgress | null {
  const all = getAllLessonProgress()
  return all[id] || null
}

export function markLessonViewed(id: string, totalExercises: number) {
  const all = getAllLessonProgress()
  const now = Date.now()
  if (all[id]) {
    all[id].lastViewed = now
    all[id].exerciseCount = totalExercises
  } else {
    all[id] = {
      id,
      firstViewed: now,
      lastViewed: now,
      completed: false,
      exerciseCount: totalExercises,
      correctCount: 0,
    }
  }
  safeSetItem(lessonsKey, JSON.stringify(all))
}

function updateLessonProgress(lessonId: string, correct: boolean) {
  const all = getAllLessonProgress()
  const now = Date.now()
  if (!all[lessonId]) {
    // Calculate exercise count from exercise data if not yet known
    const exerciseCount = grammarExercises.filter((e) => e.lessonId === lessonId).length
    all[lessonId] = {
      id: lessonId,
      firstViewed: now,
      lastViewed: now,
      completed: false,
      exerciseCount,
      correctCount: 0,
    }
  }
  all[lessonId].lastViewed = now
  if (correct) {
    all[lessonId].correctCount += 1
  }
  // Auto-set completed when all exercises are correct
  if (
    all[lessonId].exerciseCount > 0 &&
    all[lessonId].correctCount >= all[lessonId].exerciseCount
  ) {
    all[lessonId].completed = true
  }
  safeSetItem(lessonsKey, JSON.stringify(all))
}

export function markLessonCompleted(id: string) {
  const all = getAllLessonProgress()
  if (all[id]) {
    all[id].completed = true
    safeSetItem(lessonsKey, JSON.stringify(all))
  }
}

// --- Stats ---

export function getStats(): GrammarStats {
  try {
    return JSON.parse(localStorage.getItem(statsKey) || 'null') || defaultStats()
  } catch {
    return defaultStats()
  }
}

function defaultStats(): GrammarStats {
  return {
    totalExercisesDone: 0,
    totalCorrect: 0,
    totalWrong: 0,
    studyDays: 0,
    lastStudyDate: '',
    todayExercises: 0,
    todayCorrect: 0,
  }
}

function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function updateStats(correct: boolean) {
  const stats = getStats()
  const today = todayStr()

  stats.totalExercisesDone += 1
  if (correct) {
    stats.totalCorrect += 1
  } else {
    stats.totalWrong += 1
  }

  if (stats.lastStudyDate !== today) {
    stats.studyDays += 1
    stats.lastStudyDate = today
    stats.todayExercises = 0
    stats.todayCorrect = 0
  }
  stats.todayExercises += 1
  if (correct) stats.todayCorrect += 1

  safeSetItem(statsKey, JSON.stringify(stats))
}

// --- PDF Reading Progress ---

export function getPdfProgress(name: string): { page: number; updatedAt: number } | null {
  try {
    const all = JSON.parse(localStorage.getItem(pdfKey) || '{}')
    return all[name] || null
  } catch {
    return null
  }
}

export function savePdfProgress(name: string, page: number) {
  try {
    const all = JSON.parse(localStorage.getItem(pdfKey) || '{}')
    all[name] = { page, updatedAt: Date.now() }
    safeSetItem(pdfKey, JSON.stringify(all))
  } catch {
    // ignore
  }
}
