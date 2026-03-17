<template>
  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div class="flex flex-col gap-1">
      <span class="font-medium text-gray-800">{{ workout.name }}</span>
      
      <div class="flex items-center gap-1 text-xs text-gray-500">
        <span>{{ workout.exercises.slice(0, 3).map(e => e.exercise.name).join(' · ') }}</span>
        <span v-if="workout.exercises.length > 3" class="text-gray-400">+{{ workout.exercises.length - 3 }}</span>
        <span class="text-gray-300">·</span>
        <span>{{ workout.exercises.length }} упр · ~{{ calcDuration(workout) }} мин</span>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import type { WorkoutTemplate } from '@/types/types';

defineProps<{
    workout: WorkoutTemplate
}>()

function calcDuration(workout: WorkoutTemplate): number{
    const totalSets = workout.exercises.reduce((acc,e) => acc + e.sets.length, 0)
    const setTime = 40 
    const restTime = 90
    return Math.round((totalSets * (setTime + restTime)) / 60)
}

</script>

<style scoped>

</style>