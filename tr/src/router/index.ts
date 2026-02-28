import { createRouter, createWebHistory } from 'vue-router'
import DayDetails from '@/views/DayDetails.vue'
import DaysList from '@/views/DaysList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'days',
      component: DaysList
    },
    {
      path: '/day/:date',
      name: 'day-details',
      component: DayDetails,
      props: true // Это позволит передавать параметр date как пропс
    }
  ]
})

export default router
