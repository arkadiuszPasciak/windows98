import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"
import { useThemeManager } from "../../hooks"

export default function useSelect() {
	const { t } = useTranslation()
	const themeManagerDomain = useThemeManager()
	const { themes, onChangeTheme } = useConfig()

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		themeManagerDomain.setTheme(event.currentTarget.value)

		onChangeTheme(event.currentTarget.value)
	}

	const theme = themeManagerDomain.theme

	const themeOptions = themes.map((theme) => ({
		value: theme,
		name: t(`mf-theme-manager.theme.${theme}`),
	}))

	return {
		theme,
		themeOptions,
		handleSelectChange,
	}
}
