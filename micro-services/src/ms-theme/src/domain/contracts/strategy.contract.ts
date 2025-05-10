export interface ThemeStrategyContract<EThemes> {
	applyTheme(theme: EThemes): void
	getTheme(): EThemes
}
