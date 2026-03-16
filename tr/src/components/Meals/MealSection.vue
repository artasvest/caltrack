<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <!-- Header -->
    <div
      @click="toggle"
      class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white cursor-pointer hover:from-gray-100 hover:to-gray-50 transition-colors"
    >
      <span class="font-semibold text-gray-800 text-lg">{{ category }}</span>
      <div class="text-xs text-gray-400">
        {{ total.calories }} ккал · Б{{ total.protein }} Ж{{ total.fat }} У{{ total.carbs }}
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-4 h-4 text-gray-400 transition-transform duration-300"
        :class="isOpen ? 'rotate-180' : ''"
      >
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Content -->
    <div ref="contentRef" class="overflow-hidden transition-all duration-300 ease-in-out" style="max-height: 0">
      <div class="p-4 space-y-2 border-t border-gray-100">
        <MealItem
          v-for="meal in meals"
          :key="meal.id"
          :meal="meal"
          @remove="emit('remove', $event)"
        />
        <button
          @click.stop="emit('openModal')"
          class="w-full mt-3 py-2 px-4 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg border border-dashed border-gray-300 transition-colors"
        >
          <span class="text-lg">+</span>
          <span class="text-sm font-medium">Добавить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import type { Meal } from '../../types/types'
import MealItem from './MealItem.vue'

const props = defineProps<{
  category: string
  meals: Meal[]
}>()

const emit = defineEmits<{
  openModal: []
  remove: [id: string]
}>()

const isOpen = ref(false)
const contentRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
  if (contentRef.value) {
    contentRef.value.style.maxHeight = isOpen.value
      ? contentRef.value.scrollHeight + 'px'
      : '0'
  }
}

watch(() => props.meals, async () => {
  if (isOpen.value && contentRef.value) {
    await nextTick() // ждём пока DOM обновится
    contentRef.value.style.maxHeight = contentRef.value.scrollHeight + 'px'
  }
}, { deep: true })

const total = computed(() =>
  props.meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.nutrients.protein,
      fat: acc.fat + meal.nutrients.fat,
      carbs: acc.carbs + meal.nutrients.carbs,
    }),
    { calories: 0, protein: 0, fat: 0, carbs: 0 },
  ),
)
</script>