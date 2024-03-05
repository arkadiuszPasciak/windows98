import { Nullable } from "vitest"
import { localStorageNames } from "@APP|Bundles/StorageBundle/Configs/Storage.configs"
import { LocalStorage } from "@APP|Bundles/StorageBundle/Services/Storage.services"
import {
	ELanguageLocales,
	TLanguageLocales,
} from "@APP|Bundles/LanguageBundle/Supports/Language.supports"

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
