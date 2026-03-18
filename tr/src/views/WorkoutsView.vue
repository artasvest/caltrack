<template>
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

    <button 
    @click="isWorkoutModalOpen = true " 
    class="w-full mt-2 py-2 px-3 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg border border-dashed border-gray-300 transition-colors text-sm"
>
    <span class="text-lg leading-none">+</span>
    <span>Добавить тренировку</span>
</button>
    
    <AddWorkoutModal
        v-if="isWorkoutModalOpen"
        @close="isWorkoutModalOpen = false"
        />
    
    <WorkoutItem v-for="workout in workouts" :key="workout.id" :workout="workout" 
    @click="router.push({ name: 'workout-details', params: { id: workout.id} })"
    > </WorkoutItem>

  </div>
</template>

<script setup lang="ts">
import WorkoutItem from '@/components/Workouts/WorkoutItem.vue';
import { useWorkoutStore } from '@/stores/workoutStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import AddWorkoutModal from '@/components/Workouts/AddWorkoutModal.vue';
import { useExerciseStore } from '@/stores/exerciseStore'
import router from '@/router';
const exerciseStore = useExerciseStore()
const store = useWorkoutStore()
const { workouts } = storeToRefs(store)

const isWorkoutModalOpen = ref(false)


onMounted(async () => {
  await store.loadWorkouts()
  await exerciseStore.loadExercises()

})


</script>

<style scoped>

</style>