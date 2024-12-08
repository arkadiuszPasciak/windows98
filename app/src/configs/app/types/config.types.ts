export enum AppThemes {
	DARK = "dark",
	LIGHT = "light",
}

export enum AppLanguages {
	ENGLISH = "en",
	POLISH = "pl",
}

// Add types from browsers, devices, and operating systems
export interface AppConfig {
	browserName: string | undefined
	deviceType: string | undefined
	language: AppLanguages | undefined
	operatingSystem: string | undefined
	theme: AppThemes | undefined
}

export interface AppStorage {
	theme: AppThemes | undefined
	language: AppLanguages | undefined
}
