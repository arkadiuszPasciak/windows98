export enum AppThemes {
	DARK = "dark",
	LIGHT = "light",
}

export enum AppLanguages {
	ENGLISH = "en",
	POLISH = "pl",
}

export interface AppConfig {
	theme: AppThemes | undefined
	language: AppLanguages | undefined
}
