<template>
    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div class="flex flex-col gap-1">
  <input v-if="isEditing" v-model="form.name" @change="save" class="font-medium border rounded px-1" />
  <span v-else class="font-medium text-gray-800">{{ food.name }}</span>
  
  <div class="flex items-center gap-2 text-xs">
  <template v-if="isEditing">
    <span class="text-blue-600">Б:</span>
    <input type="number" v-model.number="form.protein" @change="save" class="w-14 border rounded px-1">
    <span class="text-yellow-600">Ж:</span>
    <input type="number" v-model.number="form.fat" @change="save" class="w-14 border rounded px-1">
    <span class="text-green-600">У:</span>
    <input type="number" v-model.number="form.carbs" @change="save" class="w-14 border rounded px-1">
  </template>
  <template v-else>
    <span class="text-blue-600">Б: {{ food.nutrientsPer100g?.protein || 0 }}г</span>
    <span class="text-yellow-600">Ж: {{ food.nutrientsPer100g?.fat || 0 }}г</span>
    <span class="text-green-600">У: {{ food.nutrientsPer100g?.carbs || 0 }}г</span>
  </template>
</div>
</div>
        
        <div class="flex items-center gap-1">
            <button @click="isEditing = !isEditing"
                class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                <span>{{ isEditing ? '✓' : '✏️' }}</span>
            </button>
            <button @click="emit('remove', food.id)"
                class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Food } from '@/types/types';
import { useFoodStore } from '@/stores/foodStore';
import { ref, reactive } from 'vue';

const isEditing = ref(false)
const store = useFoodStore()

const props = defineProps<{
  food: Food
}>()

const emit = defineEmits<{
  remove: [id: string]
}>()

const form = reactive({
    name: props.food.name,
    protein: props.food.nutrientsPer100g.protein,
    fat: props.food.nutrientsPer100g.fat,
    carbs: props.food.nutrientsPer100g.carbs,
})

function save() {
    store.editFood({
        id: props.food.id,
        name: form.name,
        nutrientsPer100g:{
            protein: form.protein,
            fat: form.fat,
            carbs: form.carbs,
        }
    })
}


</script>