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