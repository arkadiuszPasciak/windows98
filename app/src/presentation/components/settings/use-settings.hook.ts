import { useTranslation } from "react-i18next"
import {
	useLanguageManager,
	useLocalStorage,
	useProgramManager,
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
	const { LocalStorageService } = useLocalStorage()

	// TODO: Implement generic type in ms-language-manager
	const onChangeLanguage = (language: string) => {
		LanguageService.updateLanguage(language as Language)
		i18n.changeLanguage(language)
		LocalStorageService.set("language", language as Language)
	}

	// TODO: Implement generic type in ms-theme-manager
	const onChangeTheme = (theme: string) => {
		ThemeService.updateTheme(theme as Theme)
		LocalStorageService.set("theme", theme as Theme)
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
