import {
	type AppConfig,
	AppLanguages,
	type AppPrograms,
	AppThemes,
} from "../types"

export const defaultConfig: AppConfig = {
	browserName: undefined,
	deviceType: undefined,
	language: AppLanguages.ENGLISH,
	operatingSystem: undefined,
	theme: AppThemes.LIGHT,
}

export const defaultPrograms: AppPrograms = {
	calculator: false,
	notepad: false,
	run: false,
	settings: false,
	shutDown: false,
	ticTacToe: false,
	timer: false,
}
