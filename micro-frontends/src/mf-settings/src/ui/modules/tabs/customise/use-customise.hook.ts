import { useConfig } from "../../../hooks"

export function useCustomise() {
	const { languages, onChangeLanguage, themes, onChangeTheme } = useConfig()

	return {
		languages,
		onChangeLanguage,
		themes,
		onChangeTheme,
	}
}
