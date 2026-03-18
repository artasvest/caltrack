<template>
   <div v-if="workout">
        {{ workout.name }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useWorkoutStore } from '@/stores/workoutStore'
import { storeToRefs } from 'pinia'
import type { WorkoutTemplate } from '@/types/types'

const route = useRoute()
const store = useWorkoutStore()
const {workouts} = storeToRefs(store)

onMounted(() => store.loadWorkouts)

const workout = computed<WorkoutTemplate | undefined>(() => workouts.value.find(w => w.id === route.params.id))



</script>

<style scoped>

</style>