import type { AppLanguages } from "@APP/src/configs/app"

export function updateLangAttribute(language: AppLanguages): void {
	if (!document || !language) {
		return
	}

	const element = document.querySelector("html")

	if (!element) {
		return
	}

	element.setAttribute("lang", language)
}
