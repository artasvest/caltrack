<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="p-6  border-b border-gray-100">
        <h2 class="text-xl font-semibold text-gray-800">Добавить приём пищи</h2>
        <p class="text-sm text-gray-500 mt-1">Заполните информацию о блюде</p>
          <div class="p-6 pl-0 pb-0 ">
          <div class="flex gap-4">
            <button
              class="pb-2 text-sm font-medium border-b-2 transition-colors"
              :class="'border-blue-500 text-blue-500'"
            >
              Добавить блюдо
            </button>
            <button
              class="pb-2 text-sm font-medium border-b-2 transition-colors"
              @click="emit('switchToFood')"
              :class="'border-transparent text-gray-400'"
            >
              База продуктов
            </button>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="p-6 space-y-4">
        <!-- Name input -->
        <div class="relative">
          
          <input 
            v-model="form.name" 
            @focus="isFocused = true"
            @blur="isFocused = false"
            @click="isFocused = true"
            placeholder="Найти продукт..."
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />

<div v-if="filteredFoods.length && isFocused" class="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
  <div
    v-for="food in filteredFoods"
    :key="food.id"
    @mousedown.prevent="selectFood(food)"
    class="p-2 hover:bg-gray-50 cursor-pointer text-sm"
  >
    {{ food.name }}
  </div>
</div>
        </div>

        <!-- Переключатель режима -->
<div class="flex bg-gray-100 rounded-full p-1 mb-4">
  <button
    @click="mode = 'per100'"
    class="flex-1 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
    :class="mode === 'per100' ? 'bg-white shadow-sm text-gray-700' : 'text-gray-400'"
  >
    На 100г
  </button>
  <button
    @click="mode = 'total'"
    class="flex-1 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
    :class="mode === 'total' ? 'bg-white shadow-sm text-gray-700' : 'text-gray-400'"
  >
    На порцию
  </button>
</div>

        <!-- Macros grid -->
        <div class="grid grid-cols-3 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Белки</label>
            <input
              
              v-model.number="form.proteinPer100g"
              type="number"
              placeholder="15"
              min="0"
              @input="form.proteinPer100g = form.proteinPer100g < 0 ? 0 : form.proteinPer100g"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Жиры</label>
            <input
              v-model.number="form.fatPer100g"
              type="number"
              placeholder="8"
              min="0"
              @input="form.fatPer100g = form.fatPer100g < 0 ? 0 : form.fatPer100g"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Углеводы</label>
            <input
              v-model.number="form.carbsPer100g"
              type="number"
              placeholder="30"
              min="0"
              @input="form.carbsPer100g = form.carbsPer100g < 0 ? 0 : form.carbsPer100g"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Вес</label>
            <input
              
              v-model.number="form.weight"
              type="number"
              placeholder="30"
              min="0"
              @input="form.weight = form.weight < 0 ? 0 : form.weight"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <!-- Footer with buttons -->
      <div class="p-6 border-t border-gray-100 flex gap-3">
        <button
          @click="submit"
          class="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          Добавить
        </button>
        <label class="flex items-center gap-2 text-sm text-gray-600">
  <input type="checkbox" v-model="saveToBase" class="rounded" />
  Сохранить в базу продуктов
</label>
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
import { reactive, ref, onMounted, computed } from 'vue'
import type { Meal, Food } from '../../types/types'
import { useFoodStore } from '@/stores/foodStore';

const store = useFoodStore()
const saveToBase = ref(false)
const isFocused = ref(false)


const btnMeal = ref<HTMLElement | null>(null)
const btnFood = ref<HTMLElement | null>(null)


onMounted(async () => {
  await store.loadFoods()
})

const emit = defineEmits<{
  close: []
  add: [meal: Meal]
  switchToFood: []

}>()

const props = defineProps<{
  category: Meal['category']

}>()

const form = reactive({
  name: '',
  weight: 0,
  calories: 0,
  proteinPer100g: 0,
  fatPer100g: 0,
  carbsPer100g: 0,
  protein: 0,
  fat: 0,
  carbs: 0,
})



async function submit() {
  if (!form.name) return

  let protein, fat, carbs
  let proteinPer100g, fatPer100g, carbsPer100g

  if (mode.value === 'per100') {
    proteinPer100g = form.proteinPer100g
    fatPer100g = form.fatPer100g
    carbsPer100g = form.carbsPer100g
    protein = proteinPer100g * form.weight / 100
    fat = fatPer100g * form.weight / 100
    carbs = carbsPer100g * form.weight / 100
  } else {
    // ввели итоговые значения — пересчитываем на 100г
    protein = form.proteinPer100g
    fat = form.fatPer100g
    carbs = form.carbsPer100g
    proteinPer100g = form.weight > 0 ? protein / form.weight * 100 : 0
    fatPer100g = form.weight > 0 ? fat / form.weight * 100 : 0
    carbsPer100g = form.weight > 0 ? carbs / form.weight * 100 : 0
  }

  const calories = protein * 4 + fat * 9 + carbs * 4

  const meal: Meal = {
    id: crypto.randomUUID(),
    name: form.name,
    weight: form.weight,
    calories,
    nutrients: { protein, fat, carbs },
    nutrientsPer100g: { protein: proteinPer100g, fat: fatPer100g, carbs: carbsPer100g },
    time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }),
    category: props.category
  }

  if (saveToBase.value) {
    await store.addFood({
      id: crypto.randomUUID(),
      name: form.name,
      nutrientsPer100g: { protein: proteinPer100g, fat: fatPer100g, carbs: carbsPer100g }
    })
  }

  emit('add', meal)
  emit('close')
}

const mode = ref<'per100' | 'total'>('per100')

const searchQuery = ref('')

const filteredFoods = computed(() =>
  store.foods
    .filter(food => food.name.toLowerCase().includes(form.name.toLowerCase()))
    .slice(0, 10)
)

function selectFood(food: Food) {
  form.name = food.name
  form.proteinPer100g = food.nutrientsPer100g.protein
  form.fatPer100g = food.nutrientsPer100g.fat
  form.carbsPer100g = food.nutrientsPer100g.carbs
  isFocused.value = false
}

</script>
