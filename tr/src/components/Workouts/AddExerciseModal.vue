<template>
    <div>
         <input type="text" v-model="name">
        <button @click="">подтвердить</button>
        <button @click="emit('close')">закрыть</button>
    </div>
</template>

<script setup lang="ts">
import { useExerciseStore } from '@/stores/exerciseStore';
import { ref } from 'vue';

const name = ref('')


const store = useExerciseStore()




const emit = defineEmits<{
  close: []
}>()

</script>

<style scoped>

</style>