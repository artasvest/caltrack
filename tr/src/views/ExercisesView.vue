<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"> 
        <div 
  v-for="section in sections" 
  :key="section.name"
  @click="router.push({ name: 'muscle-exercises', params: { muscle: section.name } })"
  class="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all overflow-hidden"
>
  <img :src="section.image" class="w-full h-80 object-cover" />
  <div class="p-4">
    <h2 class="font-semibold text-gray-800">{{ section.name }}</h2>
    <p class="text-sm text-gray-400">{{ section.count }} упражнений</p>
  </div>
</div>
    </div>
</template>

<script setup lang="ts">
import { useExerciseStore } from '@/stores/exerciseStore';
import { storeToRefs } from 'pinia';
import ExerciseItem from '@/components/Workouts/ExerciseItem.vue';
import AddExerciseModal from '@/components/Workouts/AddExerciseModal.vue';
import { ref,onMounted } from 'vue';
import { muscleGroupMap } from '@/data/muscleGroups'
import type { MuscleGroup } from '@/types/types';
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useExerciseStore()
const { exercises } = storeToRefs(store)
const isModalOpen = ref(false)

const sections = computed(() => {
  return Object.entries(muscleGroupMap).map(([section, data]) => ({
    name: section,
    image: data.image,
    count: exercises.value.filter(e => {
           const primary = e.muscles[0]?.muscle
           return primary !== undefined && data.muscles.includes(primary)
           }).length
  }))
})

onMounted(async () => {
  await store.loadExercises()
})

</script>

<style scoped>

</style>