export interface ThemeManagerDomainContract<EThemes extends string> {
	theme: EThemes

	setTheme(theme: EThemes): void
}
