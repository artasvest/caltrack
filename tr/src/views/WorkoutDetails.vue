<template>
  <div v-if="workout" class="p-4 max-w-4xl mx-auto">
    <!-- Заголовок -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900">{{ workout.name }}</h1>
      <p class="text-gray-500 mt-1">{{ workout.exercises.length }} exercises</p>
    </div>
    
    <!-- Сетка упражнений -->
    <div class="grid grid-cols-1 gap-4">
      <div 
        v-for="(exerciseItem, index) in workout.exercises" 
        :key="index"
        class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-colors"
      >
        <!-- Верхняя часть с номером и названием -->
        <div class="p-4 border-b border-gray-100 bg-gray-50">
          <div class="flex items-center gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-medium">
              {{ index + 1 }}
            </span>
            <span class="font-semibold text-gray-800">{{ exerciseItem.exercise.name }}</span>
          </div>
        </div>
        
        <!-- Основная информация -->
       <div class="p-4 space-y-3">
  <div v-if="exerciseItem.sets && exerciseItem.sets.length" class="ml-2">
    <div class="text-xs text-gray-500 uppercase tracking-wide mb-2">SETS</div>
    <div class="flex flex-col space-y-2">
      <div 
        v-for="(set, setIndex) in exerciseItem.sets" 
        :key="setIndex"
        class="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-4"
      >
        <span class="text-xs text-gray-500 w-16">Подход {{ setIndex + 1 }}</span>
        <span class="font-semibold text-gray-800">{{ set.reps }} повторений</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  
  <!-- Состояние загрузки -->
  <div v-else class="p-4 max-w-4xl mx-auto">
    <div class="animate-pulse">
      <div class="h-8 bg-gray-200 rounded w-48 mb-4"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="n in 4" :key="n" class="bg-gray-100 rounded-xl h-48"></div>
      </div>
    </div>
  </div>
  
  <!-- Состояние ошибки (если тренировка не найдена) -->
  <div v-if="workout === undefined && workouts.length > 0" class="p-4 text-center">
    <p class="text-gray-500">Workout not found</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useWorkoutStore } from '@/stores/workoutStore'
import { storeToRefs } from 'pinia'
import type { WorkoutTemplate } from '@/types/types'

const route = useRoute()
const store = useWorkoutStore()
const { workouts } = storeToRefs(store)

onMounted(() => store.loadWorkouts())

const workout = computed<WorkoutTemplate | undefined>(() => 
  workouts.value.find(w => w.id === route.params.id)
)
</script>