import { createRouter, createWebHistory } from 'vue-router'
import DayDetails from '@/views/DayDetails.vue'
import DaysList from '@/views/DaysList.vue'
import FoodsView from '@/views/FoodsView.vue'
import ExercisesView from '@/views/ExercisesView.vue'
import WorkoutsView from '@/views/WorkoutsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'days',
      component: DaysList,
    },
    {
      path: '/day/:date',
      name: 'day-details',
      component: DayDetails,
      props: true, // Это позволит передавать параметр date как пропс
    },
    {
      path: '/food',
      name: 'food-base',
      component: FoodsView,
    },
    {
      path: '/exercises',
      name: 'exercises-base',
      component: ExercisesView,
    },
    {
      path: '/workouts',
      name:'workouts-base',
      component: WorkoutsView,
    }
  ],
})

export default router
