<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="p-6 border-b border-gray-100">
        <h2 class="text-xl font-semibold text-gray-800">Добавить тренировку</h2>
        <p class="text-sm text-gray-500 mt-1">Выберите упражнения и укажите подходы</p>
      </div>

      <!-- Name Input -->
      <div class="p-6 pb-2">
        <input
          type="text"
          v-model="name"
          placeholder="Название тренировки"
          class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <!-- Exercises List -->
      <div class="px-6 max-h-60 overflow-y-auto">
        <div
          v-for="exercise in exercises"
          :key="exercise.id"
          @click="addExercise(exercise)"
          class="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
        >
          <span class="text-lg text-gray-400">+</span>
          <span class="text-sm font-medium text-gray-700">{{ exercise.name }}</span>
        </div>
      </div>

      <!-- Selected Exercises -->
      <div v-if="selectedExercises.length > 0" class="p-6 border-t border-gray-100">
        <h3 class="text-sm font-medium text-gray-700 mb-3">Добавленные упражнения:</h3>
        <div v-for="(item, index) in selectedExercises" :key="index" class="mb-4 p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center justify-between mb-2">
            <span class="font-medium text-gray-800">{{ item.exercise.name }}</span>
            <button @click="selectedExercises.splice(index, 1)" class="text-gray-400 hover:text-red-500 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Sets -->
          <div v-for="(set, si) in item.sets" :key="si" class="flex items-center gap-2 mt-2">
            <span class="text-xs text-gray-500 w-6">{{ si + 1 }}.</span>
            <input
              type="number"
              v-model.number="set.reps"
              placeholder="повторения"
              min="0"
              class="w-24 px-2 py-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          
          <button @click="addSet(index)" class="text-xs text-blue-500 hover:text-blue-600 mt-2 flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Добавить подход
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 border-t border-gray-100 flex gap-3">
        <button
          @click="submit"
          :disabled="!name || selectedExercises.length === 0"
          class="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Сохранить
        </button>
        <button
          @click="emit('close')"
          class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExerciseStore } from '@/stores/exerciseStore';
import { useWorkoutStore } from '@/stores/workoutStore';
import { storeToRefs } from 'pinia';
import { ref,reactive } from 'vue';

import type { Exercise, TemplateWorkoutExercise} from '@/types/types';

const name = ref('')
const store = useWorkoutStore()
const exerciseStore = useExerciseStore()
const { exercises } = storeToRefs(exerciseStore)

const selectedExercises = ref<TemplateWorkoutExercise[]>([])

function addExercise(exercise:Exercise){
    selectedExercises.value.push({
        exercise,
        sets:[{reps:10}]
    })
}

function addSet(index:number){
    selectedExercises.value[index]?.sets.push({reps:10})
}

async function submit(){
    if(!name.value) return
    await store.addWorkout({
        id: crypto.randomUUID(),
        name: name.value,
        exercises: selectedExercises.value
    })
    name.value = ''
    emit('close')
}

const emit = defineEmits<{
  close: []
}>()

</script>

<style scoped>

</style>