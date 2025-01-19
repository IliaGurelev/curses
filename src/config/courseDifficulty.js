import LevelEasyIcon from '@/components/icons/LevelEasyIcon.vue'
import LevelNormalIcon from '@/components/icons/LevelNormalIcon.vue'
import LevelHardIcon from '@/components/icons/LevelHardIcon.vue'

export const difficultys = [
  {
    value: 0,
    text: 'Все',
    icon: null,
  },
  {
    value: 1,
    text: 'Для начинающих',
    icon: LevelEasyIcon,
  },
  {
    value: 2,
    text: 'Для продолжающих',
    icon: LevelNormalIcon,
  },
  {
    value: 3,
    text: 'Для проффесианалов',
    icon: LevelHardIcon,
  },
]
