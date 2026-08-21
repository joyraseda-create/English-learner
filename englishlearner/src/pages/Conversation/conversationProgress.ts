import { allScenarioExercises } from './data'

const STORAGE_PREFIX = 'el-conversation-'

export type ConversationAnswer = {
  answer: string
  correct: boolean
  timestamp: number
}

export type ScenarioProgress = {
  id: string
  exerciseCount: number
  correctCount: number
  completed: boolean
  lastVisited: number
}

export type WrongConversation = {
  scenarioId: string
  scenarioName: string
  context: string
  prompt: string
  options: string[]
  userAnswer: string
  correctAnswer: string
  explanation: string
  wrongCount: number
  lastWrongAt: number
}

export type ConversationStats = {
  totalDone: number
  totalCorrect: number
  totalWrong: number
  studyDays: number
  lastStudyDate: string
  todayDone: number
  todayCorrect: number
}

const answersKey = `${STORAGE_PREFIX}answers`
const wrongKey = `${STORAGE_PREFIX}wrong`
const scenarioKey = `${STORAGE_PREFIX}scenarios`
const statsKey = `${STORAGE_PREFIX}stats`

function safeSetItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore
  }
}

function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// --- Answers ---

export function getAllAnswers(): Record<string, ConversationAnswer> {
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
  scenarioId: string,
) {
  const all = getAllAnswers()
  all[exerciseId] = { answer, correct, timestamp: Date.now() }
  safeSetItem(answersKey, JSON.stringify(all))

  if (!correct) {
    addWrongQuestion(exerciseId, scenarioId, answer)
  } else {
    removeWrongQuestion(exerciseId)
  }

  updateStats(correct)
  updateScenarioProgress(scenarioId, correct)
}

export function resetAllAnswers() {
  safeSetItem(answersKey, '{}')
  safeSetItem(wrongKey, '{}')
  safeSetItem(scenarioKey, '{}')
  safeSetItem(statsKey, JSON.stringify(defaultStats()))
}

// --- Wrong Questions ---

export function getWrongQuestions(): Record<string, WrongConversation> {
  try {
    return JSON.parse(localStorage.getItem(wrongKey) || '{}')
  } catch {
    return {}
  }
}

export function getWrongQuestionList(): WrongConversation[] {
  return Object.values(getWrongQuestions()).sort((a, b) => b.lastWrongAt - a.lastWrongAt)
}

export function getWrongCount(): number {
  return Object.keys(getWrongQuestions()).length
}

function addWrongQuestion(exerciseId: string, scenarioId: string, userAnswer: string) {
  const all = getWrongQuestions()
  if (all[exerciseId]) {
    all[exerciseId].wrongCount += 1
    all[exerciseId].lastWrongAt = Date.now()
    all[exerciseId].userAnswer = userAnswer
  } else {
    const ex = allScenarioExercises.find((e, i) => `${e.scenarioId}-${i}` === exerciseId)
    all[exerciseId] = {
      scenarioId,
      scenarioName: ex?.scenarioName || '',
      context: ex?.context || '',
      prompt: ex?.prompt || '',
      options: ex?.options || [],
      userAnswer,
      correctAnswer: ex?.answer || '',
      explanation: ex?.explanation || '',
      wrongCount: 1,
      lastWrongAt: Date.now(),
    }
  }
  safeSetItem(wrongKey, JSON.stringify(all))
}

function removeWrongQuestion(exerciseId: string) {
  const all = getWrongQuestions()
  delete all[exerciseId]
  safeSetItem(wrongKey, JSON.stringify(all))
}

// --- Scenario Progress ---

export function getAllScenarioProgress(): Record<string, ScenarioProgress> {
  try {
    return JSON.parse(localStorage.getItem(scenarioKey) || '{}')
  } catch {
    return {}
  }
}

function updateScenarioProgress(scenarioId: string, correct: boolean) {
  const all = getAllScenarioProgress()
  const exerciseCount = allScenarioExercises.filter((e) => e.scenarioId === scenarioId).length
  if (!all[scenarioId]) {
    all[scenarioId] = {
      id: scenarioId,
      exerciseCount,
      correctCount: 0,
      completed: false,
      lastVisited: Date.now(),
    }
  }
  all[scenarioId].lastVisited = Date.now()
  if (correct) {
    all[scenarioId].correctCount += 1
  }
  if (all[scenarioId].exerciseCount > 0 && all[scenarioId].correctCount >= all[scenarioId].exerciseCount) {
    all[scenarioId].completed = true
  }
  safeSetItem(scenarioKey, JSON.stringify(all))
}

// --- Stats ---

export function getStats(): ConversationStats {
  try {
    return JSON.parse(localStorage.getItem(statsKey) || 'null') || defaultStats()
  } catch {
    return defaultStats()
  }
}

function defaultStats(): ConversationStats {
  return {
    totalDone: 0,
    totalCorrect: 0,
    totalWrong: 0,
    studyDays: 0,
    lastStudyDate: '',
    todayDone: 0,
    todayCorrect: 0,
  }
}

function updateStats(correct: boolean) {
  const stats = getStats()
  const today = todayStr()
  stats.totalDone += 1
  if (correct) {
    stats.totalCorrect += 1
  } else {
    stats.totalWrong += 1
  }
  if (stats.lastStudyDate !== today) {
    stats.studyDays += 1
    stats.lastStudyDate = today
    stats.todayDone = 0
    stats.todayCorrect = 0
  }
  stats.todayDone += 1
  if (correct) stats.todayCorrect += 1
  safeSetItem(statsKey, JSON.stringify(stats))
}
