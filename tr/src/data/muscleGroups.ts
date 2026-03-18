import type { MuscleGroup } from '@/types/types'
import chest from '@/assets/musclesPhoto/chest.jpg'
import back from '@/assets/musclesPhoto/back.jpg'
import legs from '@/assets/musclesPhoto/legs.jpg'
import shoulders from '@/assets/musclesPhoto/shoulders.jpg'
import arms from '@/assets/musclesPhoto/arms.jpg'
import abs from '@/assets/musclesPhoto/abs.jpg'

export const muscleGroupMap: Record<string, { muscles: MuscleGroup[], image: string }> = {
  'Грудь': { muscles: ['грудь'], image: chest },
  'Спина': { muscles: ['широчайшие', 'верхняя спина', 'нижняя спина'], image: back },
  'Ноги': { muscles: ['квадрицепс', 'бицепс бедра', 'ягодицы', 'икры'], image: legs },
  'Плечи': { muscles: ['плечи', 'задние дельты'], image: shoulders },
  'Руки': { muscles: ['бицепс', 'трицепс', 'предплечья'], image: arms },
  'Пресс': { muscles: ['пресс'], image: abs },
}

export const muscleSlugMap: Record<string, string> = {
  'Грудь': 'chest',
  'Спина': 'back',
  'Ноги': 'legs',
  'Плечи': 'shoulders',
  'Руки': 'arms',
  'Пресс': 'abs',
}

export const slugMuscleMap: Record<string, string> = Object.fromEntries(
  Object.entries(muscleSlugMap).map(([ru, en]) => [en, ru])
)

export const musclePriority: Partial<Record<MuscleGroup, number>> = {
  // большие мышцы — приоритет 1
  'широчайшие': 1,
  'грудь': 1,
  'квадрицепс': 1,
  'ягодицы': 1,
  'бицепс бедра': 1,
  'нижняя спина': 1,
  
  // средние — приоритет 2
  'верхняя спина': 2,
  'плечи': 2,
  'трапеция': 2,
  
  // малые — приоритет 3
  'бицепс': 3,
  'трицепс': 3,
  'задние дельты': 3,
  'пресс': 3,
  
  // совсем малые — приоритет 4
  'икры': 4,
  'предплечья': 4,
}