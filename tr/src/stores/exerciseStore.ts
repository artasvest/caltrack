import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllExercises, saveExercise } from '../db/db'
import type { Exercise } from '../types/types' 

export const useExerciseStore = defineStore('exercise', () => {
    const exercises = ref<Exercise[]>([])

    async function loadExercises(){
        exercises.value = await getAllExercises()
    }

    async function addExercise(exercise:Exercise){
        const exists = exercises.value.some(e=>e.name.toLowerCase()===exercise.name.toLocaleLowerCase())
        if (exists) return

        exercises.value.push(exercise)
        await saveExercise(exercise)
    }

    return {exercises, loadExercises, addExercise}
})