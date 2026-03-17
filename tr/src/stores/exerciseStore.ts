import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllExercises, saveExercise, removeExercise as removeExerciseFromDB } from '../db/db'
import type { Exercise } from '../types/types' 
import { defaultExercises } from '@/data/exercises'

export const useExerciseStore = defineStore('exercise', () => {
    const exercises = ref<Exercise[]>([])

    async function loadExercises(){
        exercises.value = await getAllExercises()
         if (exercises.value.length === 0) {
        for (const exercise of defaultExercises) {
        await saveExercise(exercise)
        }
        exercises.value = defaultExercises
  }
    }

    async function addExercise(exercise:Exercise){
        const exists = exercises.value.some(e=>e.name.toLowerCase()===exercise.name.toLocaleLowerCase())
        if (exists) return

        exercises.value.push(exercise)
        await saveExercise(exercise)
    }

     async function removeExercise(id:string){
            exercises.value = exercises.value.filter(e => e.id !== id)
            await removeExerciseFromDB(id)
        }

    return {exercises, loadExercises, addExercise, removeExercise}
})