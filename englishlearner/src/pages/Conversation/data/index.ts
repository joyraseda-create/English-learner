import type { ScenarioExercise } from '../conversationData'
import { scenariosPart1 } from './scenariosPart1'
import { scenariosPart2 } from './scenariosPart2'

export const allScenarioExercises: ScenarioExercise[] = [...scenariosPart1, ...scenariosPart2]

export const scenarioGroups: { id: string; name: string; count: number }[] = (() => {
  const map = new Map<string, string>()
  for (const ex of allScenarioExercises) {
    if (!map.has(ex.scenarioId)) {
      map.set(ex.scenarioId, ex.scenarioName)
    }
  }
  return Array.from(map.entries()).map(([id, name]) => ({
    id,
    name,
    count: allScenarioExercises.filter((e) => e.scenarioId === id).length,
  }))
})()
