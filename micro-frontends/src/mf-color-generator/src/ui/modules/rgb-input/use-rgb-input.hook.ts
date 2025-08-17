import { useTranslation } from "react-i18next"
import { useColorGenerator } from "../../hooks"

export const useRgbInput = () => {
	const { t } = useTranslation()
	const { domain } = useColorGenerator()

	const translations = {
		label: t("mf-color-generator.rgb"),
	}

	const rgbValue = `rgb(${domain.currentColor.rgb.r}, ${domain.currentColor.rgb.g}, ${domain.currentColor.rgb.b})`

	return {
		currentColor: domain.currentColor,
		translations,
		rgbValue,
	}
}
