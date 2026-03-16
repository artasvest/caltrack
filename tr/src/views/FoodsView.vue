<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <button 
    @click="isModalOpen = true" 
    class="w-full mt-2 py-2 px-3 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg border border-dashed border-gray-300 transition-colors text-sm"
>
    <span class="text-lg leading-none">+</span>
    <span>Добавить продукт</span>
</button>

        <AddFoodModal
        standalone
        v-if="isModalOpen"
        @close="isModalOpen = false"
        />

        <FoodItem 
        v-for="food in foods" 
        :key="food.id" 
        :food="food"
        @remove="handleRemoveFood"
        ></FoodItem>
    </div>
</template>

<script setup lang="ts">
import FoodItem from '../components/Foods/FoodItem.vue'
import { useFoodStore } from '../stores/foodStore'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import AddFoodModal from '@/components/Meals/AddFoodModal.vue'

const store = useFoodStore()
const { foods } = storeToRefs(store)
const isModalOpen = ref(false)

onMounted(async () => {
  await store.loadFoods()
})


function handleRemoveFood(FoodId: string) {
    store.deleteFood(FoodId)
}


</script>

<style scoped>

</style>