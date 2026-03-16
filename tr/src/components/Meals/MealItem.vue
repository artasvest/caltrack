<template>
  <div class="grid items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
  style="grid-template-columns: 1fr 40px 80px 50px 40px 40px 24px"
>
  <span class="text-gray-800 font-medium">{{ meal.name }}</span>
  <span class="text-gray-600 text-sm text-right">{{ meal.weight > 0 ? meal.weight + 'г' : '—' }}</span>
  <span class="text-gray-600 text-sm text-right">{{ meal.calories }} ккал</span>
  <span class="text-gray-600 text-sm text-right">{{ meal.nutrients.protein }}б</span>
  <span class="text-gray-600 text-sm text-right">{{ meal.nutrients.fat }}ж</span>
  <span class="text-gray-600 text-sm text-right">{{ meal.nutrients.carbs }}у</span>
  <button @click="emit('remove', meal.id)" class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
    ✕
  </button>
</div>
</template>

<script setup lang="ts">
import type { Meal } from '../../types/types'

defineProps<{
  meal: Meal
}>()

const emit = defineEmits<{
  remove: [id: string]
}>()
</script>
