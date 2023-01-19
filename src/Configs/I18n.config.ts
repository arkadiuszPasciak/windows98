import { createI18n } from 'vue-i18n'
import { ELanguageLocales } from '@Bundles/LanguageBundle/Supports/Language.supports'

export const i18n = createI18n({
  locale: ELanguageLocales.ENGLISH,
  availableLocales: [ELanguageLocales.ENGLISH, ELanguageLocales.POLISH],
  legacy: false,
})
