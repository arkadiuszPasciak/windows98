import type { Maybe } from "@windows98/toolkit"

export interface LanguageManagerDomainContract<ELanguages extends string> {
	language: Maybe<ELanguages>

	initLanguage(): void
	setLanguage(language: ELanguages): void
}
