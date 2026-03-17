import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { WorkoutTemplate } from '@/types/types'
import { getAllWorkouts, saveWorkouts } from '@/db/db'

export const useWorkoutStore = defineStore('workouts', () =>{
    const workouts = ref<WorkoutTemplate[]>([])

    async function loadWorkouts() {
        workouts.value = await getAllWorkouts()
    }
    
    async function addWorkout(workout:WorkoutTemplate) {
        const exists = workouts.value.some(w => w.name.toLowerCase()===workout.name.toLocaleLowerCase())
        if(exists) return

        workouts.value.push(workout)
        await saveWorkouts(workout)
    }
    return { workouts, loadWorkouts, addWorkout }
})