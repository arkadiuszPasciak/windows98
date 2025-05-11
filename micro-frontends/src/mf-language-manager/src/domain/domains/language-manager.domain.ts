import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { LanguageManagerDomainContract } from "../contracts"

export class LanguageManagerDomain<ELanguages extends string>
	implements LanguageManagerDomainContract<ELanguages>
{
	public language: Maybe<ELanguages> = null

	constructor() {
		makeAutoObservable(this)
	}

	public initLanguage(): void {
		// TODO: Create a micro service to manage the language
		this.language = document.documentElement.lang as ELanguages
	}

	public setLanguage(language: ELanguages): void {
		if (this.language === language) return

		this.language = language
	}
}

export const languageManagerDomain = new LanguageManagerDomain()
