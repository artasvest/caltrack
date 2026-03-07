<template>
    <div v-if="day" class="max-w-2xl mx-auto p-5">
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

            <!-- Тип дня -->
            <div class="pt-6 px-6 pb-3">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">Тип дня</span>
                    <span 
                        class="px-4 py-1.5 text-sm font-medium rounded-full shadow-sm"
                        :class="day.type === 'тренировка' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-600 border border-gray-200'"
                    >
                        {{ day.type === 'тренировка' ? '🏋️‍♂️ Тренировка' : '🛌 Отдых' }}
                    </span>
                </div>
            </div>

            <!-- Блок с весом и сном -->
            <div class="px-6 py-5 bg-gradient-to-br from-gray-50 to-white border-y border-gray-100">
                <h2 class="text-sm font-medium text-gray-500 mb-4">Физические показатели</h2>
                <div class="flex items-center justify-around">
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                            <span class="text-blue-600 text-xl">⚖️</span>
                        </div>
                        <div class="text-xs text-gray-500">Вес</div>
                        <div class="font-bold text-gray-800 text-lg">
                            {{ additional.weight ? additional.weight + ' кг' : '—' }}
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                            <span class="text-indigo-600 text-xl">😴</span>
                        </div>
                        <div class="text-xs text-gray-500">Сон</div>
                        <div class="font-bold text-gray-800 text-lg">
                            {{ additional.sleep ? additional.sleep + ' ч' : '—' }}
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                            <span class="text-purple-600 text-xl">⭐</span>
                        </div>
                        <div class="text-xs text-gray-500">Оценка</div>
                        <div class="font-bold text-gray-800 text-lg">
                            {{ additional.sleepRating ? additional.sleepRating + '/10' : '—' }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Редактирование показателей -->
            <div class="p-6 space-y-6">
                <!-- Питание -->
                <div>
                    <h2 class="text-sm font-medium text-gray-500 mb-4">Питание (граммы)</h2>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <label class="text-gray-600">Белки</label>
                                <span class="font-semibold text-blue-600">{{ nutrients.protein }}г</span>
                            </div>
                            <input @change="save" type="number" v-model.number="nutrients.protein" placeholder="0" 
                                   class="w-full p-3 border-2 border-gray-200 rounded-xl text-base transition-all focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-50">
                            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div 
                                    class="bg-blue-500 h-2 rounded-full transition-all"
                                    :style="{ width: Math.min(100, (nutrients.protein / 200) * 100) + '%' }"
                                ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <label class="text-gray-600">Жиры</label>
                                <span class="font-semibold text-yellow-600">{{ nutrients.fat }}г</span>
                            </div>
                            <input type="number" v-model.number="nutrients.fat" placeholder="0" 
                                   class="w-full p-3 border-2 border-gray-200 rounded-xl text-base transition-all focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-50">
                            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div 
                                    class="bg-yellow-500 h-2 rounded-full transition-all"
                                    :style="{ width: Math.min(100, (nutrients.fat / 70) * 100) + '%' }"
                                ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <label class="text-gray-600">Углеводы</label>
                                <span class="font-semibold text-green-600">{{ nutrients.carbs }}г</span>
                            </div>
                            <input type="number" v-model.number="nutrients.carbs" placeholder="0" 
                                   class="w-full p-3 border-2 border-gray-200 rounded-xl text-base transition-all focus:border-green-400 focus:outline-none focus:ring-4 focus:ring-green-50">
                            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div 
                                    class="bg-green-500 h-2 rounded-full transition-all"
                                    :style="{ width: Math.min(100, (nutrients.carbs / 300) * 100) + '%' }"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Дополнительные показатели (редактирование) -->
                <div>
                    <h2 class="text-sm font-medium text-gray-500 mb-4">Дополнительно</h2>
                    <div class="grid grid-cols-3 gap-3">
                        <div class="flex flex-col">
                            <label class="text-xs text-gray-500 mb-1">Вес (кг)</label>
                            <input type="number" v-model.number="additional.weight" placeholder="0" 
                                   class="p-2 border-2 border-gray-200 rounded-lg text-center focus:border-blue-400 focus:outline-none">
                        </div>
                        <div class="flex flex-col">
                            <label class="text-xs text-gray-500 mb-1">Сон (ч)</label>
                            <input type="number" v-model.number="additional.sleep" placeholder="0" min="0" max="24"  @input="additional.sleep = additional.sleep > 24 ? 24 : additional.sleep"  
                                   class="p-2 border-2 border-gray-200 rounded-lg text-center focus:border-indigo-400 focus:outline-none">
                        </div>
                        <div class="flex flex-col">
                            <label class="text-xs text-gray-500 mb-1">Оценка</label>
                            <input type="number" v-model.number="additional.sleepRating" min="0" max="10" placeholder="0" @input="additional.sleepRating = additional.sleepRating > 10 ? 10 : additional.sleepRating" 
                                   class="p-2 border-2 border-gray-200 rounded-lg text-center focus:border-purple-400 focus:outline-none">
                        </div>
                    </div>
                </div>

                <!-- Кнопки действий -->
                <div class="flex gap-3 pt-4">
                    <button @click="toggleType" 
                            class="flex-1 px-4 py-3 rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
                            :class="day?.type === 'тренировка' 
                                ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white' 
                                : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white'">
                        {{ day?.type === 'тренировка' ? '💪 Тренировка' : '😴 Отдых' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive, onMounted, watch, onUnmounted} from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useDayStore } from '@/stores/dayStore';
import { storeToRefs } from 'pinia';
import type { Day } from '@/types/types';
import { m } from 'vue-router/dist/router-CWoNjPRp.mjs';

const route = useRoute()
const router = useRouter()
const store = useDayStore()
const {days} = storeToRefs(store)

const day = computed<Day | undefined>(() => days.value.find(d => d.date == route.params.date))

const nutrients = reactive ({
    protein: 0,
    fat: 0,
    carbs: 0,
})

const additional = reactive({
    weight: 0,
    sleep: 0,
    sleepRating: 0,
})

watch(day,(newDay)=>{
    if(newDay){
        nutrients.protein = newDay.nutrients.protein
        nutrients.fat = newDay.nutrients.fat
        nutrients.carbs = newDay.nutrients.carbs     
        additional.weight = newDay.additional.weight ?? 0
        additional.sleep = newDay.additional.sleep ?? 0
        additional.sleepRating = newDay.additional.sleepRating ?? 0
    }
})

function save() {
    if (day.value){
        if (additional.sleepRating>10) additional.sleepRating = 10
        store.updateDay(day.value.date, {nutrients})
        store.updateDay(day.value.date, {additional})
    }
}

function toggleType(){
    if (day.value){
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