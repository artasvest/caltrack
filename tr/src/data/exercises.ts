import type { Exercise } from '@/types/types'

export const defaultExercises: Exercise[] = [
  // ГРУДЬ
  {
    id: 'e1',
    name: 'Жим лёжа со штангой',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.5 },
      { muscle: 'плечи', weight: 0.3 } // передняя дельта
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
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'плечи', weight: 0.5 }, // чуть больше, т.к. угол
      { muscle: 'трицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e4',
    name: 'Жим под углом с гантелями',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'плечи', weight: 0.5 },
      { muscle: 'трицепс', weight: 0.3 }
    ]
  },
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
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.8 }, // на брусьях трицепс работает мощно
      { muscle: 'плечи', weight: 0.4 }
    ]
  },
  {
    id: 'e49',
    name: 'Отжимания от пола',
    type: 'база',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'трицепс', weight: 0.5 },
      { muscle: 'плечи', weight: 0.3 },
      { muscle: 'пресс', weight: 0.2 } // стабилизация
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
  {
    id: 'e50',
    name: 'Сведение рук в кроссовере (верхние блоки)',
    type: 'изоляция',
    muscles: [
      { muscle: 'грудь', weight: 1.0 },
      { muscle: 'плечи', weight: 0.1 } // немного передней дельты
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
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'нижняя спина', weight: 1.0 },
      { muscle: 'бицепс бедра', weight: 0.8 },
      { muscle: 'ягодицы', weight: 0.7 },
      { muscle: 'широчайшие', weight: 0.4 },
      { muscle: 'трапеция', weight: 0.4 },
      { muscle: 'предплечья', weight: 0.3 }
    ]
  },
  {
    id: 'e10',
    name: 'Подтягивания',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.7 }, // ромбовидные + сред трапеция
      { muscle: 'задние дельты', weight: 0.4 }, // +++ важно!
      { muscle: 'бицепс', weight: 0.5 },
      { muscle: 'предплечья', weight: 0.2 }
    ]
  },
  {
    id: 'e11',
    name: 'Тяга верхнего блока',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.5 },
      { muscle: 'задние дельты', weight: 0.3 }, // +++
      { muscle: 'бицепс', weight: 0.5 }
    ]
  },
  {
    id: 'e12',
    name: 'Тяга горизонтального блока',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 0.8 }, // чуть меньше, чем в вертикальной
      { muscle: 'верхняя спина', weight: 1.0 }, // здесь главные ромбовидные!
      { muscle: 'задние дельты', weight: 0.5 }, // +++
      { muscle: 'бицепс', weight: 0.4 }
    ]
  },
  {
    id: 'e13',
    name: 'Тяга штанги в наклоне',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'верхняя спина', weight: 1.0 },
      { muscle: 'широчайшие', weight: 0.8 },
      { muscle: 'задние дельты', weight: 0.5 },
      { muscle: 'нижняя спина', weight: 0.4 },
      { muscle: 'бицепс', weight: 0.4 }
    ]
  },
  {
    id: 'e14',
    name: 'Тяга гантели в наклоне',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.6 },
      { muscle: 'задние дельты', weight: 0.4 },
      { muscle: 'бицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e52',
    name: 'Тяга в хаммере (одноручная/двуручная)',
    type: 'база',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.6 },
      { muscle: 'задние дельты', weight: 0.3 },
      { muscle: 'бицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e15',
    name: 'Гиперэкстензия',
    type: 'изоляция',
    muscles: [
      { muscle: 'нижняя спина', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.5 },
      { muscle: 'бицепс бедра', weight: 0.4 }
    ]
  },
  {
    id: 'e16',
    name: 'Пуловер',
    type: 'изоляция',
    muscles: [
      { muscle: 'широчайшие', weight: 1.0 },
      { muscle: 'грудь', weight: 0.4 }
    ]
  },
  {
    id: 'e53',
    name: 'Тяга лица (лицевая тяга)',
    type: 'изоляция',
    muscles: [
      { muscle: 'задние дельты', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.6 }, // трапеция + ромбы
      { muscle: 'бицепс', weight: 0.2 }
    ]
  },

  // НОГИ
  {
    id: 'e17',
    name: 'Приседания со штангой',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.8 },
      { muscle: 'бицепс бедра', weight: 0.5 },
      { muscle: 'нижняя спина', weight: 0.4 },
      { muscle: 'икры', weight: 0.2 }
    ]
  },
  {
    id: 'e18',
    name: 'Жим ногами',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.6 },
      { muscle: 'бицепс бедра', weight: 0.3 }
    ]
  },
  {
    id: 'e54',
    name: 'Жим ногами (широкая постановка)',
    type: 'база',
    muscles: [
      { muscle: 'бицепс бедра', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.9 },
      { muscle: 'квадрицепс', weight: 0.5 }
    ]
  },
  {
    id: 'e19',
    name: 'Выпады',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.9 },
      { muscle: 'бицепс бедра', weight: 0.4 }
    ]
  },
  {
    id: 'e20',
    name: 'Румынская тяга',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'бицепс бедра', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.8 },
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
  {
    id: 'e55',
    name: 'Приведение ног в тренажере',
    type: 'изоляция',
    muscles: [
      { muscle: 'ягодицы', weight: 0.6 }, // большая ягодичная
      { muscle: 'бицепс бедра', weight: 0.3 } // полусухожильная и др
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
  {
    id: 'e56',
    name: 'Гакк-приседания',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'квадрицепс', weight: 1.0 },
      { muscle: 'ягодицы', weight: 0.5 }
    ]
  },
  {
    id: 'e73',
    name: 'Ягодичный мост',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'ягодицы', weight: 1.0 },
      { muscle: 'бицепс бедра', weight: 0.6 },
      { muscle: 'нижняя спина', weight: 0.3 }
    ]
  },

  // ПЛЕЧИ
  {
    id: 'e26',
    name: 'Жим штанги стоя',
    type: 'тяжёлая база',
    muscles: [
      { muscle: 'плечи', weight: 1.0 }, // перед/сред дельты
      { muscle: 'трицепс', weight: 0.4 },
      { muscle: 'верхняя спина', weight: 0.2 } // трапеция
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
      { muscle: 'плечи', weight: 1.0 }, // средняя дельта
      { muscle: 'трапеция', weight: 0.7 },
      { muscle: 'бицепс', weight: 0.2 }
    ]
  },
  {
    id: 'e29',
    name: 'Разводка гантелей в стороны',
    type: 'изоляция',
    muscles: [
      { muscle: 'плечи', weight: 1.0 } // средняя дельта
    ]
  },
  {
    id: 'e30',
    name: 'Разводка гантелей в наклоне',
    type: 'изоляция',
    muscles: [
      { muscle: 'задние дельты', weight: 1.0 },
      { muscle: 'верхняя спина', weight: 0.4 }
    ]
  },
  {
    id: 'e31',
    name: 'Подъём гантелей перед собой',
    type: 'изоляция',
    muscles: [
      { muscle: 'плечи', weight: 1.0 } // передняя дельта
    ]
  },
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
      { muscle: 'трицепс', weight: 0.3 }
    ]
  },
  {
    id: 'e32',
    name: 'Шраги',
    type: 'изоляция',
    muscles: [
      { muscle: 'трапеция', weight: 1.0 },
      { muscle: 'плечи', weight: 0.2 } // немного сред дельты
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
      { muscle: 'бицепс', weight: 0.4 } // плечелучевая, а не бицепс
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
      { muscle: 'бицепс', weight: 0.8 }, // брахиалис + бицепс
      { muscle: 'предплечья', weight: 0.6 } // плечелучевая
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
      { muscle: 'грудь', weight: 0.5 },
      { muscle: 'плечи', weight: 0.3 }
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
      { muscle: 'плечи', weight: 0.3 }
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
      { muscle: 'пресс', weight: 1.0 },
      { muscle: 'бицепс бедра', weight: 0.2 }, // подвздошно-поясничная
      { muscle: 'предплечья', weight: 0.2 } // хват
    ]
  },
  {
    id: 'e45',
    name: 'Планка',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 },
      { muscle: 'плечи', weight: 0.3 },
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
      { muscle: 'пресс', weight: 0.8 }, // косые
      { muscle: 'плечи', weight: 0.3 }
    ]
  },
  {
    id: 'e69',
    name: 'Русский твист (повороты корпуса)',
    type: 'изоляция',
    muscles: [
      { muscle: 'пресс', weight: 1.0 } // косые
    ]
  },
]