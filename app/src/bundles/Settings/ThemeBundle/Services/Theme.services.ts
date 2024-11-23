import {
	EThemes,
	type TThemes,
} from "@APP/src/bundles/Settings/ThemeBundle/Supports/Theme.supports"
import { localStorageNames } from "@APP/src/bundles/Window/StorageBundle/Configs/Storage.configs"
import { LocalStorage } from "@APP/src/bundles/Window/StorageBundle/Services/Storage.services"
import { AppThemes, useAppConfig } from "@APP/src/configs/app"
import type { Nullable } from "vitest"

export function getThemeColorFromStorage(): TThemes {
	const theme = LocalStorage.getItem(
		localStorageNames.THEME,
	) as Nullable<TThemes>

	return theme ?? EThemes.LIGHT
}

export function mountThemeColorByStorage(): void {
	const isExist = LocalStorage.isItemExist(localStorageNames.THEME)
	const appConfig = useAppConfig()

	if (!isExist) {
		updateThemeClass(EThemes.LIGHT)
		setThemeColorInStorage(EThemes.LIGHT)
		appConfig.set("theme", AppThemes.LIGHT)
	}

	const theme = LocalStorage.getItem(localStorageNames.THEME) as TThemes

	if (!theme) {
		return
	}

	updateThemeClass(theme)
	setThemeColorInStorage(theme)
	appConfig.set("theme", theme as unknown as AppThemes)
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
