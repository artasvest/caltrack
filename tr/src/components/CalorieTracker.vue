<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <DayCard v-for="day in days" :key="day.date" :day="day">
        </DayCard>
    </div>
</template>

<script setup lang="ts">
import type { Day } from '../types/types'
import DayCard from './DayCard.vue';
import { ref } from 'vue';


function generateDays(count: number): Day[] {
  return Array.from({ length: count }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (count - 1 - i))
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    
    return {
      date: dateStr,
      type: 'rest',
      additional: {},
      nutrients: { protein: 0, fat: 0, carbs: 0 }
    }
  })
}

const days = ref<Day[]>(generateDays(7))


</script>

<style scoped>

</style>