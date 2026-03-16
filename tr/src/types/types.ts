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
}

export interface Exercise {
    id: string
    name: string 
    
  }
  export interface Workout {
    id: string
    exercices: Exercise[]
  }
