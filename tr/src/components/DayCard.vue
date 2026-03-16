<template>
  <div
    @click="goToDayDetails"
    class="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1 pb-5"
  >
    <!-- Декоративная полоска сверху -->
    <div
      class="absolute top-0 left-0 w-full h-1"
      :class="
        day.type === 'тренировка'
          ? 'bg-gradient-to-r from-green-400 to-blue-500'
          : 'bg-gradient-to-r from-gray-400 to-gray-500'
      "
    ></div>

    <!-- Дата -->
    <div class="pt-6 px-5 pb-3">
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-gray-800">{{ formatDate(day.date) }}</span>
        <span
          class="px-3 py-1 text-xs font-medium rounded-full shadow-sm"
          :class="
            day.type === 'тренировка'
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-gray-100 text-gray-600 border border-gray-200'
          "
        >
          {{ day.type === 'тренировка' ? '🏋️‍♂️ Тренировка' : '🛌 Отдых' }}
        </span>
      </div>
    </div>

    <!-- Блок с весом и сном -->
    <div class="px-5 py-4 bg-gradient-to-br from-gray-50 to-white">
      <div class="flex items-center justify-around">
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
            <span class="text-blue-600 text-lg">⚖️</span>
          </div>
          <div class="text-xs text-gray-500">Вес</div>
          <div class="font-bold text-gray-800">
            {{ day.additional.weight ? day.additional.weight + ' кг' : '—' }}
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
            <span class="text-indigo-600 text-lg">😴</span>
          </div>
          <div class="text-xs text-gray-500">Сон</div>
          <div class="font-bold text-gray-800">
            {{ day.additional.sleep ? day.additional.sleep + ' ч' : '—' }}
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
            <span class="text-purple-600 text-lg">⭐</span>
          </div>
          <div class="text-xs text-gray-500">Оценка</div>
          <div class="font-bold text-gray-800">
            {{ day.additional.sleepRating ? day.additional.sleepRating + '/10' : '—' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Блок с нутриентами (прогресс бары) -->
    <div class="px-5 py-4 bg-white border-t border-gray-100">
      <div class="space-y-3">
        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-gray-600">Белки</span>
            <span class="font-semibold text-blue-600">{{ day.nutrients.protein }}г</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full transition-all duration-300 group-hover:bg-blue-600"
              :style="{ width: Math.min(100, (day.nutrients.protein / 200) * 100) + '%' }"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-gray-600">Жиры</span>
            <span class="font-semibold text-yellow-600">{{ day.nutrients.fat }}г</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-yellow-500 h-2 rounded-full transition-all duration-300 group-hover:bg-yellow-600"
              :style="{ width: Math.min(100, (day.nutrients.fat / 70) * 100) + '%' }"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-gray-600">Углеводы</span>
            <span class="font-semibold text-green-600">{{ day.nutrients.carbs }}г</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-green-500 h-2 rounded-full transition-all duration-300 group-hover:bg-green-600"
              :style="{ width: Math.min(100, (day.nutrients.carbs / 300) * 100) + '%' }"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-gray-600">Калории</span>
            <span class="font-semibold text-red-600">{{ day.calories }}kcal</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-red-500 h-2 rounded-full transition-all duration-300 group-hover:bg-red-600"
              :style="{ width: Math.min(100, (day.calories / 2630) * 100) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Иконка для указания кликабельности -->
    <div class="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span class="text-xs text-gray-400">👆 подробнее</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Day } from '../types/types'
import { useRouter } from 'vue-router'

const props = defineProps<{
  day: Day
}>()

const router = useRouter()

const goToDayDetails = () => {
  router.push({
    name: 'day-details',
    params: { date: props.day.date },
  })
}

// Форматирование даты
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}
</script>
