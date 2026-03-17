<template>
    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div class="flex flex-col gap-1">
            <span class="font-medium text-gray-800">{{ exercise.name }}</span>
        </div>
        
        <div class="flex items-center gap-1">
            <button @click="emit('remove', exercise.id)"
                class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Exercise } from '@/types/types';

defineProps<{
  exercise: Exercise
}>()

const emit = defineEmits<{
remove: [id:string]
}>()

</script>

<style scoped>

</style>