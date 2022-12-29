import { Nullable } from 'vitest'

export type TStorageName = 'language' | 'theme'

export interface IBaseStorage {
  storage: Storage
  clearAll(): void
  getItem(name: TStorageName): Nullable<string>
  isItemExist(name: TStorageName): boolean
  removeItem(name: TStorageName): void
  setItem(name: TStorageName, value: string): void
}

export interface ILocalStorageNames {
  LANGUAGE: TStorageName
  THEME: TStorageName
}
