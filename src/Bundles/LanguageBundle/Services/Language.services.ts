import { Nullable } from 'vitest'
import { localStorageNames } from '@Bundles/StorageBundle/Configs/Storage.configs'
import { LocalStorage } from '@Bundles/StorageBundle/Services/Storage.services'

export function mountLanguageVersionByStorage(): Nullable<string> {
  const isExist = LocalStorage.isItemExist(localStorageNames.LANGUAGE)

  if (!isExist) {
    return null
  }

  return LocalStorage.getItem(localStorageNames.LANGUAGE)
}
