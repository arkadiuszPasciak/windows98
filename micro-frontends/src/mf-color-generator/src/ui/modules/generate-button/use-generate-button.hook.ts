import { useTranslation } from "react-i18next"
import { useColorGenerator } from "../../hooks"

export const useGenerateButton = () => {
	const { t } = useTranslation()
	const { domain } = useColorGenerator()

	const translations = {
		buttonText: t("mf-color-generator.generate-button"),
	}

	const handleGenerateColor = () => {
		domain.generateRandomColor()
	}

	return {
		handleGenerateColor,
		translations,
	}
}
