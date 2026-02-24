<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <DayCard v-for="day in days" :key="day.date" :day="day">
        </DayCard>
    </div>
</template>

<script setup lang="ts">
import type { Day } from '../types/types'
import DayCard from './DayCard.vue';
import { ref } from 'vue';
const days = ref<Day[]>([

])
</script>

<style scoped>

</style>