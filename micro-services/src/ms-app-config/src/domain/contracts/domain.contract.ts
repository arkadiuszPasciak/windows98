export interface AppConfigDomainContract<EThemes, ELanguages> {
	language: ELanguages
	theme: EThemes

	setLanguage(language: ELanguages): void
	setTheme(EThemes: EThemes): void
}
