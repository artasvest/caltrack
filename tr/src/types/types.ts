export interface Meal {
  id: string
  name: string
  weight: number
  calories: number
  nutrients: Nutrients
  nutrientsPer100g: Nutrients 
  time: string
  category?: 'завтрак' | 'обед' | 'ужин' | 'перекус'
}

export interface Food{
  id: string
  name: string
  nutrientsPer100g: Nutrients
}

export interface Nutrients {
  protein: number
  fat: number
  carbs: number
}

export interface Additional {
  weight?: number
  sleep?: number
  sleepRating?: number
}

export interface Day {
  date: string
  additional: Additional
  type: 'тренировка' | 'отдых'
  nutrients: Nutrients
  calories: number
  meals: Meal[]
  workout: Workout[] | null
}

export interface Set{
  reps:number
  weight:number
}

export interface templateSet{
  reps:number
}

export type ExerciseType = 'база' | 'изоляция'

export type MuscleGroup = 
  'грудь' | 
  'верхняя спина' | 
  'нижняя спина' | 
  'широчайшие' |
  'квадрицепс' | 
  'бицепс бедра' | 
  'ягодицы' |
  'икры' |
  'плечи' | 
  'бицепс' | 
  'трицепс' | 
  'пресс' |
  'предплечья' |
  'задние дельты' | 
  'трапеция'
  
  

export interface MuscleWeight {
  muscle: MuscleGroup
  weight: number
}

export interface Exercise {
  id: string
  name: string
  type: ExerciseType
  muscles: MuscleWeight[]
}

export interface TemplateWorkoutExercise{
  sets: templateSet[]
  exercise: Exercise
}

export interface WorkoutExercise{
  sets: Set[]
  exercise: Exercise
}

export interface WorkoutTemplate {
  id: string
  name: string
  exercises: TemplateWorkoutExercise[]  
}

export interface Workout {
  id: string
  templateId?: string 
  exercises: WorkoutExercise[]
}
