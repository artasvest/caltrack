<template>
    <div v-if="day" class="max-w-2xl mx-auto p-5 relative z-0">
        <!-- Шапка с кнопкой назад и датой -->
        <div class="mb-6 flex items-center gap-4">
            <button 
                @click="goToDaysList" 
                class="group flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
            >
                <span class="text-xl transform group-hover:-translate-x-0.5 transition-transform">←</span>
            </button>
            <h1 class="text-2xl font-bold text-gray-800">{{ formatDate(route.params.date as string) }}</h1>
        </div>
        
        <!-- Основная карточка -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <!-- Декоративная полоска сверху -->
            <div 
                class="h-1 w-full"
                :class="day.type === 'тренировка' ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'"
            ></div>

            <div class="pt-6 px-6 pb-3">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">Тип дня</span>
                    <div class="relative flex bg-gray-100 rounded-full p-1" ref="container">
                    <div 
                        class="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out"
                        :class="day.type === 'тренировка' ? 'bg-gradient-to-r from-green-400 to-blue-500 shadow-sm' : 'bg-white shadow-sm'"
                        :style="sliderStyle"
                    ></div>

                    <button
                        ref="btnRest"
                        @click="toggleType"
                        class="relative z-10 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 cursor-pointer"
                        :class="day.type === 'отдых' ? 'text-gray-700' : 'text-gray-400'"
                    >
                        😴 Отдых
                    </button>
                    <button
                        ref="btnWorkout"
                        @click="toggleType"
                        class="relative z-10 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 cursor-pointer"
                        :class="day.type === 'тренировка' ? 'text-white' : 'text-gray-400'"
                    >
                        💪 Тренировка
                    </button>
                    </div>
                </div>
            </div>

            <!-- Блок с весом и сном -->
           <div class="px-6 py-5 bg-gradient-to-br from-gray-50 to-white border-y border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-sm font-medium text-gray-500">Физические показатели</h2>
                    <button 
                    @click="isEditing = !isEditing" 
                    class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                    :class="isEditing 
                        ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-600' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'"
                    >
                    <span>{{ isEditing ? '✓' : '✏️' }}</span>
                    <span>{{ isEditing ? 'Готово' : 'Изменить' }}</span>
                    </button>
                </div>

                <div class="flex items-center justify-around">
                    <!-- Вес -->
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                            <span class="text-blue-600 text-xl">⚖️</span>
                        </div>
                        <div class="text-xs text-gray-500">Вес</div>
                        <input v-if="isEditing" type="number" v-model.number="additional.weight" @change="save"
                            class="w-16 text-center font-bold text-gray-800 border-b-2 border-blue-400 focus:outline-none" />
                        <div v-else class="font-bold text-gray-800 text-lg">
                            {{ additional.weight ? additional.weight + ' кг' : '—' }}
                        </div>
                    </div>

                    <!-- Сон -->
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                            <span class="text-indigo-600 text-xl">😴</span>
                        </div>
                        <div class="text-xs text-gray-500">Сон</div>
                        <input v-if="isEditing" type="number" v-model.number="additional.sleep" @change="save"
                            @input="additional.sleep = additional.sleep > 24 ? 24 : additional.sleep"
                            class="w-16 text-center font-bold text-gray-800 border-b-2 border-indigo-400 focus:outline-none" />
                        <div v-else class="font-bold text-gray-800 text-lg">
                            {{ additional.sleep ? additional.sleep + ' ч' : '—' }}
                        </div>
                    </div>

                    <!-- Оценка -->
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                            <span class="text-purple-600 text-xl">⭐</span>
                        </div>
                        <div class="text-xs text-gray-500">Оценка</div>
                        <input v-if="isEditing" type="number" v-model.number="additional.sleepRating" @change="save"
                            @input="additional.sleepRating = additional.sleepRating > 10 ? 10 : additional.sleepRating"
                            class="w-16 text-center font-bold text-gray-800 border-b-2 border-purple-400 focus:outline-none" />
                        <div v-else class="font-bold text-gray-800 text-lg">
                            {{ additional.sleepRating ? additional.sleepRating + '/10' : '—' }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-5 py-4 bg-white border-t border-gray-100">
            <div class="space-y-3">
                <div>
                    <div class="flex justify-between text-xs mb-1">
                        <span class="text-gray-600">Белки</span>
                        <span class="font-semibold text-blue-600">{{ day.nutrients.protein }}г</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            class="bg-blue-500 h-2 rounded-full transition-all duration-300 group-hover:bg-blue-600"
                            :style="{ width: Math.min(100, (day.nutrients.protein / 200) * 100) + '%' }"
                        ></div>
                    </div>
                </div>
                
                <div>
                    <div class="flex justify-between text-xs mb-1">
                        <span class="text-gray-600">Жиры</span>
                        <span class="font-semibold text-yellow-600">{{ day.nutrients.fat }}г</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            class="bg-yellow-500 h-2 rounded-full transition-all duration-300 group-hover:bg-yellow-600"
                            :style="{ width: Math.min(100, (day.nutrients.fat / 70) * 100) + '%' }"
                        ></div>
                    </div>
                </div>
                
                <div>
                    <div class="flex justify-between text-xs mb-1">
                        <span class="text-gray-600">Углеводы</span>
                        <span class="font-semibold text-green-600">{{ day.nutrients.carbs }}г</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            class="bg-green-500 h-2 rounded-full transition-all duration-300 group-hover:bg-green-600"
                            :style="{ width: Math.min(100, (day.nutrients.carbs / 300) * 100) + '%' }"
                        ></div>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between text-xs mb-1">
                        <span class="text-gray-600">Калории</span>
                        <span class="font-semibold text-red-600">{{ day.calories }}kcal</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            class="bg-red-500 h-2 rounded-full transition-all duration-300 group-hover:bg-red-600"
                            :style="{ width: Math.min(100, (day.calories / 2630) * 100) + '%' }"
                        ></div>
                    </div>
                </div>
                
            </div>
        </div>

            <!-- Редактирование показателей -->
            <div class="p-6 space-y-6">
                <!-- Питание -->
                <div class="space-y-4">
                    <h2 class="text-sm font-medium text-gray-500 mb-3">Приёмы пищи</h2>
                    
                    <MealSection
                        category="Завтрак"
                        :meals="day.meals.filter(m => m.category === 'завтрак')"
                        @openModal="openModal('завтрак')"
                        @remove="handleRemoveMeal"
                    />
                    
                    <MealSection
                        category="Обед"
                        :meals="day.meals.filter(m => m.category === 'обед')"
                        @openModal="openModal('обед')"
                        @remove="handleRemoveMeal"
                    />
                    
                    <MealSection
                        category="Ужин"
                        :meals="day.meals.filter(m => m.category === 'ужин')"
                        @openModal="openModal('ужин')"
                        @remove="handleRemoveMeal"
                    />
                    
                    <MealSection
                        category="Перекус"
                        :meals="day.meals.filter(m => m.category === 'перекус')"
                        @openModal="openModal('перекус')"
                        @remove="handleRemoveMeal"
                    />
             
                    <AddMealModal
                        v-if="isModalOpen && activeModal === 'meal'"
                        :category="activeCategory"
                        @close="isModalOpen = false"
                        @add="handleAddMeal"
                        @switchToFood = "activeModal = 'food'"
                    />
                    <AddFoodModal
                        v-if="isModalOpen && activeModal ==='food'"
                        @close="isModalOpen = false"
                        @switchToMeal="activeModal = 'meal'"
                    />
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive, onMounted, watch, onUnmounted, ref, nextTick} from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useDayStore } from '@/stores/dayStore';
import { storeToRefs } from 'pinia';
import type { Day } from '@/types/types';
import MealSection from '../components/Meals/MealSection.vue'
import AddMealModal from '../components/Meals/AddMealModal.vue'
import type { Meal } from '../types/types'
import AddFoodModal from '@/components/Meals/AddFoodModal.vue';

const btnRest = ref<HTMLElement | null>(null)
const btnWorkout = ref<HTMLElement | null>(null)

const sliderStyle = computed(() => {
  const btn = day.value?.type === 'тренировка' ? btnWorkout.value : btnRest.value
  if (!btn) return {}
  return {
    left: btn.offsetLeft + 'px',
    width: btn.offsetWidth + 'px'
  }
})


const activeModal = ref<'meal' | 'food'>('meal')
const isEditing = ref(false)
const isModalOpen = ref(false)
const activeCategory = ref<Meal['category']>('завтрак')

function openModal(category: Meal['category']) {
  activeCategory.value = category
  isModalOpen.value = true
}



function handleAddMeal(meal: Meal) {
  if (day.value) {
    store.addMeal(day.value.date, meal)
  }
}

function handleRemoveMeal(mealId: string) {
  if (day.value) {
    store.removeMeal(day.value.date, mealId)
  }
}


const route = useRoute()
const router = useRouter()
const store = useDayStore()
const {days} = storeToRefs(store)

const day = computed<Day | undefined>(() => days.value.find(d => d.date == route.params.date))


const additional = reactive({
    weight: 0,
    sleep: 0,
    sleepRating: 0,
})

watch(day,(newDay)=>{
    if(newDay){
     
        additional.weight = newDay.additional.weight ?? 0
        additional.sleep = newDay.additional.sleep ?? 0
        additional.sleepRating = newDay.additional.sleepRating ?? 0
    }
})

function save() {
    if (day.value){
        if (additional.sleepRating>10) additional.sleepRating = 10
        store.updateDay(day.value.date, {additional})
    }
}

function toggleType(){
    if (day.value){
        save()
        store.updateDay(day.value.date, {type: day.value.type === 'тренировка' ? 'отдых' : 'тренировка'})
    }
}

function goToDaysList(){
    save()
    router.back()
}

onBeforeRouteLeave(()=>{
    save()
})

function handldeBeforeUnload(){
    save()
}

// Форматирование даты
const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}

onMounted(() => {
    store.loadDays()
    window.addEventListener('beforeunload', handldeBeforeUnload)
})

onUnmounted(()=> window.removeEventListener('beforeunload', handldeBeforeUnload))


</script>

<style>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button{
    -webkit-appearance: none;
}
</style>