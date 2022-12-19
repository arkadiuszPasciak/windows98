import { createI18n } from 'vue-i18n'
import { ELanguagesLocales } from '@Bundles/LanguageBundle/Supports/Language.supports'

export const i18n = createI18n({
  locale: ELanguagesLocales.ENGLISH,
  availableLocales: [ELanguagesLocales.ENGLISH, ELanguagesLocales.POLISH],
  legacy: false,
})
