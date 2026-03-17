<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <button 
    @click="isModalOpen = true " 
    class="w-full mt-2 py-2 px-3 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg border border-dashed border-gray-300 transition-colors text-sm"
>
    <span class="text-lg leading-none">+</span>
    <span>Добавить упражнение</span>
</button>

        <AddExerciseModal
        v-if="isModalOpen"
        @close="isModalOpen = false"
        />

        <ExerciseItem 
        v-for="exercise in exercises" 
        :key="exercise.id" 
        :exercise="exercise"
        @remove="handleRemoveExercise"
        ></ExerciseItem>
    </div>
</template>

<script setup lang="ts">
import { useExerciseStore } from '@/stores/exerciseStore';
import { storeToRefs } from 'pinia';
import ExerciseItem from '@/components/Workouts/ExerciseItem.vue';
import AddExerciseModal from '@/components/Workouts/AddExerciseModal.vue';
import { ref,onMounted } from 'vue';

const store = useExerciseStore()
const { exercises } = storeToRefs(store)
const isModalOpen = ref(false)

onMounted(async () => {
  await store.loadExercises()
})

function handleRemoveExercise(exerciseId: string) {
    store.removeExercise(exerciseId)
}



</script>

<style scoped>

</style>