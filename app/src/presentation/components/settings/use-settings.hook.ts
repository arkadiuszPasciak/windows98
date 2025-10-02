import { useTranslation } from "react-i18next"
import {
	useLanguageManager,
	useProgramManager,
	useStorage,
	useThemeManager,
} from "../../../application/hooks"
import {
	type Language,
	Program,
	type Theme,
} from "../../../infrastructure/types"

export function useSettings() {
	const { languages, LanguageService } = useLanguageManager()
	const { runProgram } = useProgramManager()
	const { themes, ThemeService } = useThemeManager()
	const { i18n } = useTranslation()
	const { StorageService } = useStorage()

	// TODO: Implement generic type in ms-language-manager
	const onChangeLanguage = (language: string) => {
		LanguageService.updateLanguage(language as Language)
		i18n.changeLanguage(language)
		StorageService.set("language", language as Language)
	}

	// TODO: Implement generic type in ms-theme-manager
	const onChangeTheme = (theme: string) => {
		ThemeService.updateTheme(theme as Theme)
		StorageService.set("theme", theme as Theme)
	}

	const onCloseProgram = () => {
		runProgram(Program.SETTINGS, false)
	}

	return {
		languages,
		onChangeLanguage,
		onChangeTheme,
		onCloseProgram,
		themes,
	}
}
