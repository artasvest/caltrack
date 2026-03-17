<template>
    <div class="">
        {{ exercise.name }}
    </div>
</template>

<script setup lang="ts">
import type { Exercise } from '@/types/types';

defineProps<{
  exercise: Exercise
}>()

</script>

<style scoped>

</style>