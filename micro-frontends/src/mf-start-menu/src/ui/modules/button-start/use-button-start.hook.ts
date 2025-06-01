import { useTranslation } from "react-i18next"

export const useButtonStart = () => {
	const { t } = useTranslation()

	const translations = {
		text: t("mf-start-menu.programs.start"),
		buttonLogo: t("mf-start-menu.button.logo"),
	}

	return {
		translations,
	}
}
