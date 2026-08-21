export type ScenarioExercise = {
  scenarioId: string
  scenarioName: string
  context: string
  speaker: string
  prompt: string
  promptTrans?: string
  options: string[]
  optionsTrans?: string[]
  answer: string
  explanation: string
}

export type ScenarioGroup = {
  id: string
  name: string
  icon: string
  exercises: ScenarioExercise[]
}
