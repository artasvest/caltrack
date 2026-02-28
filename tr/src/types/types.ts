export interface Meal {
  id: string
  name: string
  calories: number
  time: string
  category?: 'breakfast' | 'lunch' | 'dinner' | 'snack'
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
}
