<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="p-6 border-b border-gray-100">
        <h2 class="text-xl font-semibold text-gray-800">Добавить в базу</h2>
        <p class="text-sm text-gray-500 mt-1">Введите БЖУ на 100г продукта</p>
        <div class="p-6 pl-0 pb-0 ">
  <div v-if="!standalone" class="flex gap-4">
    <button
      @click="emit('switchToMeal')"
      class="pb-2 text-sm font-medium border-b-2 transition-colors"
      :class="'border-transparent text-gray-400'"
    >
      Добавить блюдо
    </button>
    <button
      class="pb-2 text-sm font-medium border-b-2 transition-colors"
      :class="'border-blue-500 text-blue-500'"
    >
      База продуктов
    </button>
  </div>
</div>

      </div>

      <!-- Form -->
      <div class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Название</label>
          <input
            v-model="form.name"
            placeholder="Например: Гречка"
            class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div class="grid grid-cols-3 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Белки</label>
            <input v-model.number="form.protein" type="number" placeholder="15" min="0"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Жиры</label>
            <input v-model.number="form.fat" type="number" placeholder="8" min="0"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Углеводы</label>
            <input v-model.number="form.carbs" type="number" placeholder="30" min="0"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 border-t border-gray-100 flex gap-3">
        <button @click="submit"
          class="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
          Сохранить
        </button>
        <button @click="emit('close')"
          class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive} from 'vue'
import { useFoodStore } from '@/stores/foodStore'

const store = useFoodStore()
  
const props = defineProps<{
  standalone?: boolean
}>()



const emit = defineEmits<{
  close: []
  switchToMeal: []
}>()

const form = reactive({
  name: '',
  protein: 0,
  fat: 0,
  carbs: 0,
})

async function submit() {
  if (!form.name) return

  await store.addFood({
    id: crypto.randomUUID(),
    name: form.name,
    nutrientsPer100g: {
      protein: form.protein,
      fat: form.fat,
      carbs: form.carbs,
    }
  })

  emit('close')
}
</script>