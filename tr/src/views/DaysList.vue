<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <DayCard v-for="day in days" :key="day.date" :day="day">
        </DayCard>
    </div>
</template>

<script setup lang="ts">
import DayCard from '../components/DayCard.vue';
import { useDayStore } from '../stores/dayStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';


const store = useDayStore()
const { days } = storeToRefs(store)

onMounted(async() => {
    await store.loadDays()
    await store.updateDay('2026-03-06', {
        type: 'тренировка',
        nutrients: {protein:150, fat:50, carbs:200}
    })
})

</script>

<style scoped>

</style>