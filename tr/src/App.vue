<template>
  <div class="pb-30">
    <router-view />
  </div>
  <NavContainer>
    <NavButton icon="📅" label="Дни" @click="router.push({ name: 'days' })" />
    <NavButton icon="🥗" label="Продукты" @click="router.push({ name: 'food-base' })" />
  </NavContainer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavContainer from './components/Navigation/NavContainer.vue'
import NavButton from './components/Navigation/NavButton.vue'

const router = useRouter()
</script>

<style scoped></style>
