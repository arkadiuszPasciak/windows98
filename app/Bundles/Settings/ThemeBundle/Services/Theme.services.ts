import { localStorageNames } from "@APP|Bundles/StorageBundle/Configs/Storage.configs"
import { LocalStorage } from "@APP|Bundles/StorageBundle/Services/Storage.services"
import {
	EThemes,
	TThemes,
} from "@APP|Bundles/ThemeBundle/Supports/Theme.supports"
import { Nullable } from "vitest"

export function getThemeColorFromStorage(): TThemes {
	const theme = LocalStorage.getItem(
		localStorageNames.THEME,
	) as Nullable<TThemes>

	return theme ?? EThemes.LIGHT
}

export function mountThemeColorByStorage(): void {
	const isExist = LocalStorage.isItemExist(localStorageNames.THEME)

	if (!isExist) {
		updateThemeClass(EThemes.LIGHT)
		setThemeColorInStorage(EThemes.LIGHT)
	}

	const theme = LocalStorage.getItem(localStorageNames.THEME) as TThemes

	if (!theme) {
		return
	}

	updateThemeClass(theme)
	setThemeColorInStorage(theme)
}

export function setThemeColorInStorage(theme: TThemes): void {
	LocalStorage.setItem(localStorageNames.THEME, theme)
}

export function updateThemeClass(theme: TThemes): void {
	if (!document || !theme) {
		return
	}

	const element = document.querySelector("html")

	if (!element) {
		return
	}

	if (element.classList.contains(`theme-${theme}`)) {
		return
	}

	element.setAttribute("class", `theme-${theme}`)
}
