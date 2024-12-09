import { type AppConfig, AppLanguages, AppThemes } from "../types"

export const defaultConfig: AppConfig = {
	browserName: undefined,
	deviceType: undefined,
	language: AppLanguages.ENGLISH,
	operatingSystem: undefined,
	theme: AppThemes.LIGHT,
}
