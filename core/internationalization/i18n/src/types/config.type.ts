import type { InitOptions } from 'i18next'
import type { I18nLanguageTypes } from './languages.type'
import type { I18nLocalesConfig } from './locales.type'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TODO resolve typescript error
export interface I18nConfig extends InitOptions {
  lng: I18nLanguageTypes
  fallbackLng: I18nLanguageTypes
  resources: I18nLocalesConfig
}
