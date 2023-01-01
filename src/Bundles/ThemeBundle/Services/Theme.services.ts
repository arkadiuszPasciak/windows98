import { localStorageNames } from '@Bundles/StorageBundle/Configs/Storage.configs'
import { LocalStorage } from '@Bundles/StorageBundle/Services/Storage.services'
import { EThemes, TThemes } from '@Bundles/ThemeBundle/Supports/Theme.supports'

export function mountThemeColorByStorage(): void {
  const isExist = LocalStorage.isItemExist(localStorageNames.THEME)

  if (!isExist) {
    updateThemeClass(EThemes.DARK)
  }
}

export function setThemeColorInStorage(theme: TThemes): void {
  LocalStorage.setItem(localStorageNames.THEME, theme)
}

export function updateThemeClass(theme: TThemes): void {
  if (!document || !theme) {
    return
  }

  const element = document.querySelector('html')

  if (!element) {
    return
  }

  if (element.classList.contains(`theme-${theme}`)) {
    return
  }

  element.setAttribute('class', `theme-${theme}`)
}
