<template>
    <div>

        <div>

            <div> <!-- дата --> 
                <span>{{ day.date }}</span>
            </div>
            <div> <!-- вес,сон,оценка --> 
                <span>{{ day.additional.weight }}</span>
                <span>{{ day.additional.sleep }}</span>
                <span>{{ day.additional.sleepRating }}</span>
            </div>

        </div>

         <div>

            <div> <!-- тренировочный/нетренировочный день --> 
                <span>{{ day.type }}</span>
            </div>
            <div> <!-- б|ж|у --> 
                <span>{{ day.nutrients.protein }}</span>
                <span>{{ day.nutrients.fat }}</span>
                <span>{{ day.nutrients.carbs }}</span>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import type { Day } from '../types/types'

defineProps<{
  day: Day
}>()

</script>

<style scoped>

</style>