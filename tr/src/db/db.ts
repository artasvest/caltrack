import type { Day, Food, Exercise, Workout } from '../types/types'


const DB_NAME = 'caltrack'
const DB_VERSION = 3
const STORE_NAME = 'days'
const FOODS_STORE = 'foods'
const WORKOUTS_STORE = 'workouts'
const EXERCISES_STORE = 'exercises'


function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'date' })
      }
      if (!db.objectStoreNames.contains(FOODS_STORE)) {
        db.createObjectStore(FOODS_STORE, { keyPath: 'id' })
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function getAllDays(): Promise<Day[]> {
  const db = await openDB()
  return new Promise<Day[]>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function saveDay(day: Day) {
  const db = await openDB()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    store.put(JSON.parse(JSON.stringify(day)))
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getAllFoods(): Promise<Food[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(FOODS_STORE, 'readonly')
    const store = tx.objectStore(FOODS_STORE)
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function saveFood(food: Food) {
  const db = await openDB()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(FOODS_STORE, 'readwrite')
    const store = tx.objectStore(FOODS_STORE)
    store.put(JSON.parse(JSON.stringify(food)))
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function removeFood(id:string) {
  const db = await openDB()
  return new Promise<void>((resolve,reject) =>{
    const tx = db.transaction(FOODS_STORE, 'readwrite')
    const store = tx.objectStore(FOODS_STORE)
    store.delete(id)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getAllExercises(): Promise<Exercise[]> {
  const db = await openDB()
  return new Promise<Exercise[]>((resolve, reject) => {
    const tx = db.transaction(EXERCISES_STORE, 'readonly')
    const store = tx.objectStore(EXERCISES_STORE)
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function saveExercise(exercise: Exercise) {
  const db = await openDB()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(EXERCISES_STORE, 'readwrite')
    const store = tx.objectStore(EXERCISES_STORE)
    store.put(JSON.parse(JSON.stringify(exercise)))
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getAllWorkouts(): Promise<Workout[]> {
  const db = await openDB()
  return new Promise<Workout[]>((resolve, reject) => {
    const tx = db.transaction(WORKOUTS_STORE, 'readonly')
    const store = tx.objectStore(WORKOUTS_STORE)
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function saveWorkouts(workout: Workout) {
  const db = await openDB()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(EXERCISES_STORE, 'readwrite')
    const store = tx.objectStore(EXERCISES_STORE)
    store.put(JSON.parse(JSON.stringify(workout)))
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}