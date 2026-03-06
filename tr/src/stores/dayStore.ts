import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllDays, saveDay } from '../db/db'
import type { Day } from '../types/types'

function generateDays(count: number): Day[] {
  return Array.from({ length: count }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (count - 1 - i))
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    return {
      date: dateStr,
      type: 'отдых',
      additional: {},
      nutrients: { protein: 0, fat: 0, carbs: 0 }
    }
  })
}

export const useDayStore = defineStore('days', () => {
  const days = ref<Day[]>([])

  async function loadDays() {
    const saved = await getAllDays()
    const generated = generateDays(90)

    days.value = generated.map(day => {
      const found = saved.find(s => s.date === day.date)
      return found ?? day
    })
  }

  async function updateDay(date: string, data: Partial<Day>) {
    const idx = days.value.findIndex(d => d.date === date)
    if (idx !== -1) {
      days.value[idx] = { ...days.value[idx], ...data } as Day
      await saveDay(days.value[idx])
    }
  }

  return { days, loadDays, updateDay }
})