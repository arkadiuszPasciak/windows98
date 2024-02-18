import localesEN from '../locales/en'
import localesMicroAppsEN from './micro-apps/en'
import localesPL from '../locales/pl'
import localesMicroAppsPL from './micro-apps/pl'

const locales = {
  en: {
    ...localesEN,
    ...localesMicroAppsEN
  },
  pl: {
    ...localesPL,
    ...localesMicroAppsPL
  },
}

export const localesReact = {
  en: {
    translation: {
      ...localesEN,
      ...localesMicroAppsEN
    }
  },
  pl: {
    translation: {
      ...localesPL,
      ...localesMicroAppsPL
    }
  },
}

export default locales
