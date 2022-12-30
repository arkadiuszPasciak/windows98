import { Nullable } from 'vitest'
import { localStorageNames } from '@Bundles/StorageBundle/Configs/Storage.configs'
import { LocalStorage } from '@Bundles/StorageBundle/Services/Storage.services'

export function mountLanguageVersionByStorage(): Nullable<string> {
  const isExist = LocalStorage.isItemExist(localStorageNames.LANGUAGE)

  if (!isExist) {
    return null
  }

  const language = LocalStorage.getItem(localStorageNames.LANGUAGE)

  if (!language) {
    return null
  }

  updateLangAttribute(language)

  return LocalStorage.getItem(localStorageNames.LANGUAGE)
}

export function setLanguageVersionInStorage(language: string): void {
  LocalStorage.setItem(localStorageNames.LANGUAGE, language)
}

export function updateLangAttribute(language: string): void {
  if (!document || !language) {
    return
  }

  const element = document.querySelector('html')

  if (!element) {
    return
  }

  element.setAttribute('lang', language)
}
