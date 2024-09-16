import { type ReactEventHandler, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { EThemes } from "../../../domain/models"
import { useTheme } from "../../hooks"

export default function useSelect() {
	const { t } = useTranslation()
	const { themeDomain } = useTheme()

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event): void => {
		themeDomain.setTheme(event.currentTarget.value as EThemes)
	}

	const themes = useMemo(() => [
		{
			value: EThemes.LIGHT,
			name: t("ma-theme.themes.light"),
		},
		{
			value: EThemes.DARK,
			name: t("ma-theme.themes.dark"),
		},
	], [t])

	return {
		handleSelectChange,
		themes,
		theme: themeDomain.theme
	}
}
