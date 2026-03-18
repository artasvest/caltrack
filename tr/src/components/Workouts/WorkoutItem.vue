<template>
  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div class="flex flex-col gap-1">
      <span class="font-medium text-gray-800">{{ workout.name }}</span>
      
      <div class="flex items-center gap-1 text-xs text-gray-500">
        <span>{{ workout.exercises.map(e => e.exercise.name).join(' · ') }}</span>
        <span v-if="workout.exercises.length > 3" class="text-gray-400">+{{ workout.exercises.length - 3 }}</span>
        <span class="text-gray-300">·</span>
        <span>{{ workout.exercises.length }} упр · ~{{ calcDuration(workout) }} мин</span>
        <span>акцент на {{ getWorkoutAccent(workout) }}</span>


      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import type { WorkoutTemplate } from '@/types/types';
import type { MuscleGroup } from '@/types/types';
import { musclePriority } from '@/data/muscleGroups';
import type { ExerciseType } from '@/types/types';
defineProps<{
    workout: WorkoutTemplate
}>()

function calcDuration(workout: WorkoutTemplate): number {
  const restByType: Record<ExerciseType, number> = {
    'тяжёлая база': 180,
    'база': 120,
    'изоляция': 90,
  }

  const transitionRest: Record<ExerciseType, number> = {
    'тяжёлая база': 180,
    'база': 120,
    'изоляция': 75,
  }

  const timePerRep: Record<ExerciseType, number> = {
    'тяжёлая база': 5,
    'база': 4,
    'изоляция': 2.5,
  }

  const warmup = 7 * 60

  console.log(workout.exercises.map(e => ({
  name: e.exercise.name,
  type: e.exercise.type,
  sets: e.sets.map(s => s.reps)
})))

  let totalSeconds = warmup

  workout.exercises.forEach((e, index) => {
    const rest = restByType[e.exercise.type]
    const repTime = timePerRep[e.exercise.type]

    // Время на подходы + отдых между ними
    e.sets.forEach((set, setIndex) => {
      totalSeconds += set.reps * repTime
      if (setIndex !== e.sets.length - 1) {
        totalSeconds += rest
      }
    })

    // Отдых между упражнениями (кроме последнего)
    if (index !== workout.exercises.length - 1) {
      totalSeconds += transitionRest[e.exercise.type]
    }
  })

  return Math.ceil(totalSeconds / 60)
}

function getWorkoutAccent(workout: WorkoutTemplate): string {
  const totals: Partial<Record<MuscleGroup, number>> = {}

  workout.exercises.forEach(e => {
    e.exercise.muscles.forEach(m => {
      totals[m.muscle] = (totals[m.muscle] || 0) + m.weight
    })
  })

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1])

  if (!sorted[0]) return ''

  const bigMuscles: MuscleGroup[] = ['грудь', 'широчайшие', 'квадрицепс', 'ягодицы', 'бицепс бедра', 'нижняя спина']

  const topBig = sorted
    .filter(([muscle, weight]) => bigMuscles.includes(muscle as MuscleGroup) && weight >= 1)
    .sort((a, b) => b[1] - a[1])[0]

  const result: string[] = []

  console.log(sorted)

  if (topBig) result.push(topBig[0])

  const maxWeight = sorted[0][1]

  // добавляем топ мышцы по нагрузке, исключая уже добавленную
  for (const [muscle, weight] of sorted) {
  if (result.length >= 3) break

  const isSignificant = weight >= maxWeight * 0.4

  if (!result.includes(muscle) && isSignificant) {
    result.push(muscle)
  }
}

  return result.join(' · ')
}

</script>

<style scoped>

</style>