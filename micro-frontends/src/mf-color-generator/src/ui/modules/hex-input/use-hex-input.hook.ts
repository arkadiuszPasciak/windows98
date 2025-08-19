import { useTranslation } from "react-i18next"
import { useColorGenerator } from "../../hooks"

export const useHexInput = () => {
	const { t } = useTranslation()
	const { domain } = useColorGenerator()

	const translations = {
		label: t("mf-color-generator.hex"),
		copy: t("mf-color-generator.copy"),
	}

	return {
		currentColor: domain.currentColor,
		translations,
		copyHexColor: domain.copyHexColor,
	}
}
