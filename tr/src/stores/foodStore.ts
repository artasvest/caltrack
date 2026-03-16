import { defineStore } from "pinia";
import { ref } from "vue";
import type { Food } from "@/types/types"; 
import { getAllFoods, removeFood, saveFood } from "@/db/db";

export const useFoodStore = defineStore('food', () =>{
    const foods = ref<Food[]>([])

    async function loadFoods(){
        foods.value = await getAllFoods()
    }

    async function addFood(food:Food){
        const exists = foods.value.some(f => f.name.toLowerCase() === food.name.toLowerCase())
        if (exists) return
        foods.value.unshift(food)
        await saveFood(food)
    }

    async function deleteFood(id:string){
        foods.value = foods.value.filter(f => f.id !== id)
        await removeFood(id)
    }

    async function editFood(food:Food) {
        const index = foods.value.findIndex(f => f.id === food.id)
        if (index !== -1) foods.value[index] = food
        await saveFood(food)
    }

  

    return {foods, loadFoods, addFood, deleteFood, editFood}
})