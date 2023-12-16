import type { I18nLanguageTypes } from './languages.type'
import type { I18nLocalesConfig } from './locales.type'

export interface I18nConfig {
  availableLocales: Array<I18nLanguageTypes>
  fallbackLocale: I18nLanguageTypes
  locale: I18nLanguageTypes
  messages: I18nLocalesConfig
}
