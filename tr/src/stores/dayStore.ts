import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllDays, saveDay } from '../db/db'
import type { Day, Meal } from '../types/types'

function generateDays(count: number): Day[] {
  return Array.from({ length: count }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i) // от сегодня назад
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    return {
      date: dateStr,
      type: 'отдых',
      additional: {},
      nutrients: { protein: 0, fat: 0, carbs: 0 },
      meals: [],
      calories: 0,
      workout: null,
    }
  })
}

export const useDayStore = defineStore('days', () => {
  const days = ref<Day[]>([])

  async function loadDays() {
  const saved = await getAllDays()

  const firstDate = saved.length > 0
    ? new Date(saved[saved.length - 1]!.date)
    : new Date()
  
  const today = new Date()
  const diffDays = Math.floor((today.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24))
  const count = Math.max(7, diffDays + 1)

  const generated = generateDays(count)

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

  function recalcNutrients(day: Day) {
  day.nutrients = day.meals.reduce((acc, meal) => ({
    protein: acc.protein + meal.nutrients.protein,
    fat: acc.fat + meal.nutrients.fat,
    carbs: acc.carbs + meal.nutrients.carbs
  }), { protein: 0, fat: 0, carbs: 0 })

  day.calories = day.meals.reduce((acc,meal) => acc+meal.calories ,0)
}

  async function addMeal(date: string, meal: Meal){
    const idx = days.value.findIndex(d => d.date === date)
    if (idx !== -1){
      const day = days.value[idx]
      if (day){
        day.meals.push(meal)
        recalcNutrients(day)
        await saveDay(day)
      }
    }
  }

  async function removeMeal(date:string, mealId: string){
    const idx = days.value.findIndex(d => d.date === date)
    if (idx !== -1){
      const day = days.value[idx]
      if (day){
        day.meals = day.meals.filter(m => m.id !== mealId )
        recalcNutrients(day)
        await saveDay(day)
      }
    }
  }

  return { days, loadDays, updateDay, addMeal, removeMeal }
})