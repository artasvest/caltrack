<template>
    <div>
         <input type="text" v-model="name">
        <button @click="submit">подтвердить</button>
        <button @click="emit('close')">закрыть</button>
    </div>
</template>

<script setup lang="ts">
import { useExerciseStore } from '@/stores/exerciseStore';
import { ref } from 'vue';

const name = ref('')


const store = useExerciseStore()


async function submit(){
    if(!name.value) return
    await store.addExercise({
        id: crypto.randomUUID(),
        name: name.value
    })
    name.value = ''
    emit('close')
}

const emit = defineEmits<{
  close: []
}>()

</script>

<style scoped>

</style>