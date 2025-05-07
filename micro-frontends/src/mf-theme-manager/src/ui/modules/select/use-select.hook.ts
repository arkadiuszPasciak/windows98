import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useThemeManager } from "../../hooks"

export default function useSelect() {
	const { t } = useTranslation()
	const themeManagerDomain = useThemeManager()

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		themeManagerDomain.setTheme(event.currentTarget.value)

		// TODO: add a function to set the language from the config
	}

	const language = themeManagerDomain.theme

	// TODO: add a function to get the languages from the config
	const languages = [
		{
			value: "dark",
			name: t("mf-theme-manager.theme.dark"),
		},
		{
			value: "light",
			name: t("mf-theme-manager.theme.light"),
		},
	]

	return {
		language,
		languages,
		handleSelectChange,
	}
}
