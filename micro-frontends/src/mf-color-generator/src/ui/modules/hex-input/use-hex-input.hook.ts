import { useTranslation } from "react-i18next"
import { useColorGenerator } from "../../hooks"

export const useHexInput = () => {
	const { t } = useTranslation()
	const { domain } = useColorGenerator()

	const translations = {
		label: t("mf-color-generator.hex"),
	}

	return {
		currentColor: domain.currentColor,
		translations,
	}
}
