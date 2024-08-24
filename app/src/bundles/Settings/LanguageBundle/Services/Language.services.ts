import {
	ELanguageLocales,
	type TLanguageLocales,
} from "@APP/src/bundles/Settings/LanguageBundle/Supports/Language.supports"
import { localStorageNames } from "@APP/src/bundles/Window/StorageBundle/Configs/Storage.configs"
import { LocalStorage } from "@APP/src/bundles/Window/StorageBundle/Services/Storage.services"
import type { Nullable } from "vitest"

export function mountLanguageVersionByStorage(): Nullable<string> {
	const isExist = LocalStorage.isItemExist(localStorageNames.LANGUAGE)

	if (!isExist) {
		updateLangAttribute(ELanguageLocales.ENGLISH)
		setLanguageVersionInStorage(ELanguageLocales.ENGLISH)

		return null
	}

	const language = LocalStorage.getItem(
		localStorageNames.LANGUAGE,
	) as ELanguageLocales.ENGLISH

	if (!language) {
		return null
	}

	updateLangAttribute(language)

	return LocalStorage.getItem(localStorageNames.LANGUAGE)
}

export function setLanguageVersionInStorage(language: TLanguageLocales): void {
	LocalStorage.setItem(localStorageNames.LANGUAGE, language)
}

export function updateLangAttribute(language: TLanguageLocales): void {
	if (!document || !language) {
		return
	}

	const element = document.querySelector("html")

	if (!element) {
		return
	}

	element.setAttribute("lang", language)
}
