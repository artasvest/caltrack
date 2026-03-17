<template>
  <div class="max-w-2xl mx-auto p-5">
    <h1 class="text-2xl font-bold mb-4">{{ muscle }}</h1>
    <ExerciseItem
      v-for="exercise in filteredExercises"
      :key="exercise.id"
      :exercise="exercise"
      @remove="store.removeExercise($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useExerciseStore } from '@/stores/exerciseStore'
import { storeToRefs } from 'pinia'
import { muscleGroupMap } from '@/data/muscleGroups'
import type { MuscleGroup } from '@/types/types'
import ExerciseItem from '@/components/Workouts/ExerciseItem.vue'

const props = defineProps<{ muscle: string }>()

const store = useExerciseStore()
const { exercises } = storeToRefs(store)

onMounted(() => store.loadExercises())

const muscles = computed(() => muscleGroupMap[props.muscle]?.muscles ?? [])

const filteredExercises = computed(() =>
  exercises.value.filter(e => {
    const primary = e.muscles[0]?.muscle
    return primary !== undefined && (muscles.value as MuscleGroup[]).includes(primary)
  })
)
</script>