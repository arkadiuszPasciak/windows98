import { Nullable } from 'vitest'
import { localStorageNames } from '@Bundles/StorageBundle/Configs/Storage.configs'
import { LocalStorage } from '@Bundles/StorageBundle/Services/Storage.services'
import {
  ELanguagesLocales,
  TLanguagesLocal,
} from '@Bundles/LanguageBundle/Supports/Language.supports'

export function mountLanguageVersionByStorage(): Nullable<string> {
  const isExist = LocalStorage.isItemExist(localStorageNames.LANGUAGE)

  if (!isExist) {
    updateLangAttribute(ELanguagesLocales.ENGLISH)
    setLanguageVersionInStorage(ELanguagesLocales.ENGLISH)

    return null
  }

  const language = LocalStorage.getItem(
    localStorageNames.LANGUAGE,
  ) as ELanguagesLocales.ENGLISH

  if (!language) {
    return null
  }

  updateLangAttribute(language)

  return LocalStorage.getItem(localStorageNames.LANGUAGE)
}

export function setLanguageVersionInStorage(language: TLanguagesLocal): void {
  LocalStorage.setItem(localStorageNames.LANGUAGE, language)
}

export function updateLangAttribute(language: TLanguagesLocal): void {
  if (!document || !language) {
    return
  }

  const element = document.querySelector('html')

  if (!element) {
    return
  }

  element.setAttribute('lang', language)
}
