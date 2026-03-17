import type { Exercise } from '@/types/types'

export const defaultExercises: Exercise[] = [
  // ГРУДЬ
  {
    id: 'e1',
    name: 'Жим лёжа со штангой',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.5 },
      { muscle: 'плечи', weight: 0.3 }
    ]
  },
  {
    id: 'e2',
    name: 'Жим лёжа с гантелями',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.4 },
      { muscle: 'плечи', weight: 0.2 }
    ]
  },
  {
    id: 'e3',
    name: 'Жим под углом со штангой',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'плечи', weight: 0.4 },
      { muscle: 'трицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e4',
    name: 'Жим под углом с гантелями',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'плечи', weight: 0.4 },
      { muscle: 'трицепс', weight: 0.3 }
    ]
  },
  // *** ДОБАВЛЕНО: Жим в хаммере ***
  {
    id: 'e48',
    name: 'Жим в хаммере (грудь)',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.3 },
      { muscle: 'плечи', weight: 0.2 }
    ]
  },
  {
    id: 'e5',
    name: 'Отжимания на брусьях',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.7 },
      { muscle: 'плечи', weight: 0.3 }
    ]
  },
  // *** ДОБАВЛЕНО: Отжимания от пола ***
  {
    id: 'e49',
    name: 'Отжимания от пола',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.5 },
      { muscle: 'плечи', weight: 0.3 }
    ]
  },
  {
    id: 'e6',
    name: 'Разводка с гантелями лёжа',
    type: 'изоляция',
    muscles: [
      { muscle: 'грудь', weight: 1.0 }
    ]
  },
  {
    id: 'e7',
    name: 'Кроссовер',
    type: 'изоляция',
    muscles: [
      { muscle: 'грудь', weight: 1.0 }
    ]
  },
  {
    id: 'e8',
    name: 'Пек дек (бабочка)',
    type: 'изоляция',
    muscles: [
      { muscle: 'грудь', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Сведение в кроссовере сидя/стоя ***
  {
    id: 'e50',
    name: 'Сведение рук в кроссовере (верхние блоки)',
    type: 'изоляция',
    muscles: [
      { muscle: 'грудь', weight: 1.0 }
    ]
  },
  {
    id: 'e51',
    name: 'Сведение рук в кроссовере (нижние блоки)',
    type: 'изоляция',
    muscles: [
      { muscle: 'грудь', weight: 1.0 }
    ]
  },

  // СПИНА
  {
    id: 'e9',
    name: 'Становая тяга',
    type: 'база',
    muscles: [
      { muscle: 'нижняя спина', weight: 1.0 },
      { muscle: 'широчайшие', weight: 0.7 },
      { muscle: 'ягодицы', weight: 0.6 },
      { muscle: 'бицепс бедра', weight: 0.5 },
      { muscle: 'трапеция', weight: 0.4 },
      { muscle: 'бицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e10',
    name: 'Подтягивания',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'бицепс', weight: 0.6 },
      { muscle: 'верхняя спина', weight: 0.4 },
      { muscle: 'плечи', weight: 0.2 }
    ]
  },
  {
    id: 'e11',
    name: 'Тяга верхнего блока',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'бицепс', weight: 0.6 },
      { muscle: 'верхняя спина', weight: 0.3 }
    ]
  },
  {
    id: 'e12',
    name: 'Тяга горизонтального блока',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.6 },
      { muscle: 'бицепс', weight: 0.4 },
      { muscle: 'задние дельты', weight: 0.3 }
    ]
  },
  {
    id: 'e13',
    name: 'Тяга штанги в наклоне',
    type: 'база',
    muscles: [
      { muscle: 'верхняя спина', weight: 1.0 },
      { muscle: 'широчайшие', weight: 0.7 },
      { muscle: 'бицепс', weight: 0.4 },
      { muscle: 'нижняя спина', weight: 0.3 },
      { muscle: 'задние дельты', weight: 0.3 }
    ]
  },
  {
    id: 'e14',
    name: 'Тяга гантели в наклоне',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.6 },
      { muscle: 'бицепс', weight: 0.4 },
      { muscle: 'задние дельты', weight: 0.3 }
    ]
  },
  // *** ДОБАВЛЕНО: Тяга в хаммере (спина) ***
  {
    id: 'e52',
    name: 'Тяга в хаммере (одноручная/двуручная)',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.5 },
      { muscle: 'бицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e15',
    name: 'Гиперэкстензия',
    type: 'изоляция',
    muscles: [
      { muscle: 'нижняя спина', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.4 },
      { muscle: 'бицепс бедра', weight: 0.3 }
    ]
  },
  {
    id: 'e16',
    name: 'Пуловер',
    type: 'изоляция',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'грудь', weight: 0.3 }
    ]
  },
  // *** ДОБАВЛЕНО: Шраги гантели/штанга уже есть в плечах, но ок
  {
    id: 'e53',
    name: 'Тяга лица (лицевая тяга)',
    type: 'изоляция',
    muscles: [
      { muscle: 'задние дельты', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.7 }
    ]
  },

  // НОГИ
  {
    id: 'e17',
    name: 'Приседания со штангой',
    type: 'база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.7 },
      { muscle: 'бицепс бедра', weight: 0.4 },
      { muscle: 'нижняя спина', weight: 0.3 }
    ]
  },
  {
    id: 'e18',
    name: 'Жим ногами',
    type: 'база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.6 },
      { muscle: 'бицепс бедра', weight: 0.3 }
    ]
  },
  // *** ДОБАВЛЕНО: Жим ногами (узкая/широкая постановка) - оставим как одно, но можно дубляж
  {
    id: 'e54',
    name: 'Жим ногами (широкая постановка)',
    type: 'база',
    muscles: [
      { muscle: 'бицепс бедра', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.8 },
      { muscle: 'квадрицепс', weight: 0.5 }
    ]
  },
  {
    id: 'e19',
    name: 'Выпады',
    type: 'база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.8 },
      { muscle: 'бицепс бедра', weight: 0.3 }
    ]
  },
  {
    id: 'e20',
    name: 'Румынская тяга',
    type: 'база',
    muscles: [
      { muscle: 'бицепс бедра', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.7 },
      { muscle: 'нижняя спина', weight: 0.4 }
    ]
  },
  {
    id: 'e21',
    name: 'Сгибание ног лёжа',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс бедра', weight: 1.0 }
    ]
  },
  {
    id: 'e71',
    name: 'Сгибание ног сидя',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс бедра', weight: 1.0 }
    ]
  },
  {
    id: 'e22',
    name: 'Разгибание ног сидя',
    type: 'изоляция',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 }
    ]
  },
  {
    id: 'e23',
    name: 'Отведение ног в кроссовере',
    type: 'изоляция',
    muscles: [
      { muscle: 'ягодицы', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Приведение ног ***
  {
    id: 'e55',
    name: 'Приведение ног в тренажере',
    type: 'изоляция',
    muscles: [
      { muscle: 'ягодицы', weight: 0.7 },
      { muscle: 'бицепс бедра', weight: 0.5 } // Приводящие, но аппроксимируем
    ]
  },
  {
    id: 'e72',
    name: 'Разведение ног в тренажере',
    type: 'изоляция',
    muscles: [
      { muscle: 'ягодицы', weight: 1.0 },
      { muscle: 'бицепс бедра', weight: 0.2 } 
    ]
  },
  {
    id: 'e24',
    name: 'Подъём на носки стоя',
    type: 'изоляция',
    muscles: [
      { muscle: 'икры', weight: 1.0 }
    ]
  },
  {
    id: 'e25',
    name: 'Подъём на носки сидя',
    type: 'изоляция',
    muscles: [
      { muscle: 'икры', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Гакк-приседания
  {
    id: 'e56',
    name: 'Гакк-приседания',
    type: 'база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.4 }
    ]
  },
  {
    id: 'e73',
    name: 'Ягодичный мост',
    type: 'база',
    muscles: [
      { muscle: 'ягодицы', weight: 1.0 },
      { muscle: 'бицепс бедра', weight: 0.5 },
      { muscle: 'нижняя спина', weight: 0.3 } 
    ]
  },

  // ПЛЕЧИ
  {
    id: 'e26',
    name: 'Жим штанги стоя',
    type: 'база',
    muscles: [
      { muscle: 'плечи', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.5 },
      { muscle: 'верхняя спина', weight: 0.2 }
    ]
  },
  {
    id: 'e27',
    name: 'Жим гантелей сидя',
    type: 'база',
    muscles: [
      { muscle: 'плечи', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.4 }
    ]
  },
  {
    id: 'e28',
    name: 'Тяга штанги к подбородку',
    type: 'база',
    muscles: [
      { muscle: 'плечи', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.5 },
      { muscle: 'бицепс', weight: 0.2 }
    ]
  },
  {
    id: 'e29',
    name: 'Разводка гантелей в стороны',
    type: 'изоляция',
    muscles: [
      { muscle: 'плечи', weight: 1.0 }
    ]
  },
  {
    id: 'e30',
    name: 'Разводка гантелей в наклоне',
    type: 'изоляция',
    muscles: [
      { muscle: 'задние дельты', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.3 }
    ]
  },
  {
    id: 'e31',
    name: 'Подъём гантелей перед собой',
    type: 'изоляция',
    muscles: [
      { muscle: 'плечи', weight: 1.0 }
    ]
  },
  {
    id: 'e32',
    name: 'Шраги',
    type: 'изоляция',
    muscles: [
      { muscle: 'трапеция', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Подъем гантелей перед собой (попеременно)
  {
    id: 'e57',
    name: 'Подъем гантелей перед собой (попеременно)',
    type: 'изоляция',
    muscles: [
      { muscle: 'плечи', weight: 1.0 }
    ]
  },
  {
    id: 'e58',
    name: 'Жим Арнольда',
    type: 'база',
    muscles: [
      { muscle: 'плечи', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.2 }
    ]
  },

  // БИЦЕПС
  {
    id: 'e33',
    name: 'Подъём штанги на бицепс',
    type: 'база',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 },
      { muscle: 'предплечья', weight: 0.3 }
    ]
  },
  // *** ДОБАВЛЕНО: EZ-гриф и Прямой гриф (вариации) ***

  {
    id: 'e59',
    name: 'Подъем EZ-грифа на бицепс',
    type: 'база',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 },
      { muscle: 'предплечья', weight: 0.2 }
    ]
  },
  {
    id: 'e60',
    name: 'Подъем штанги на бицепс (обратный хват)',
    type: 'изоляция',
    muscles: [
      { muscle: 'предплечья', weight: 1.0 },
      { muscle: 'бицепс', weight: 0.5 }
    ]
  },
  {
    id: 'e34',
    name: 'Подъём гантелей на бицепс',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 },
      { muscle: 'предплечья', weight: 0.2 }
    ]
  },
  {
    id: 'e35',
    name: 'Молотки',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 },
      { muscle: 'предплечья', weight: 0.5 }
    ]
  },
  {
    id: 'e36',
    name: 'Подъём на бицепс на скамье Скотта',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Скотт с EZ-грифом ***
  {
    id: 'e61',
    name: 'Подъем EZ-грифа на скамье Скотта',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 }
    ]
  },
  {
    id: 'e37',
    name: 'Подъём на бицепс в кроссовере',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Концентрированный подъем ***
  {
    id: 'e62',
    name: 'Концентрированный подъем на бицепс',
    type: 'изоляция',
    muscles: [
      { muscle: 'бицепс', weight: 1.0 }
    ]
  },

  // ТРИЦЕПС
  {
    id: 'e38',
    name: 'Жим узким хватом',
    type: 'база',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 },
      { muscle: 'грудь', weight: 0.4 },
      { muscle: 'плечи', weight: 0.2 }
    ]
  },
  {
    id: 'e39',
    name: 'Французский жим',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Французский жим с гантелями/сидя ***
  {
    id: 'e63',
    name: 'Французский жим с гантелями',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },
  {
    id: 'e40',
    name: 'Разгибание на блоке',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Разгибание на блоке (обратный хват/канаты) ***
  {
    id: 'e64',
    name: 'Разгибание на блоке (канаты)',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },
  {
    id: 'e65',
    name: 'Разгибание на блоке (из за головы)',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },
  {
    id: 'e41',
    name: 'Отжимания от скамьи',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 },
      { muscle: 'плечи', weight: 0.2 }
    ]
  },
  {
    id: 'e42',
    name: 'Разгибание гантели из-за головы',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Кикбэк (разгибание в наклоне) ***
  {
    id: 'e66',
    name: 'Кикбэк (разгибание в наклоне)',
    type: 'изоляция',
    muscles: [
      { muscle: 'трицепс', weight: 1.0 }
    ]
  },

  // ПРЕСС
  {
    id: 'e43',
    name: 'Скручивания',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 }
    ]
  },
  {
    id: 'e44',
    name: 'Подъём ног в висе',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 }
    ]
  },
  {
    id: 'e45',
    name: 'Планка',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 },
      { muscle: 'нижняя спина', weight: 0.3 }
    ]
  },
  {
    id: 'e46',
    name: 'Скручивания на блоке',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 }
    ]
  },
  {
    id: 'e47',
    name: 'Велосипед',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Боковые планки, подъемы ног лежа ***
  {
    id: 'e67',
    name: 'Подъем ног лежа',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 }
    ]
  },
  {
    id: 'e68',
    name: 'Боковая планка',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 0.7 }, // Косые
      { muscle: 'нижняя спина', weight: 0.3 }
    ]
  },
  {
    id: 'e69',
    name: 'Русский твист (повороты корпуса)',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 }
    ]
  },
  // *** ДОБАВЛЕНО: Вакуум (чисто для галочки, хоть и без веса) ***
]