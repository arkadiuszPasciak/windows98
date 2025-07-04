import { useTranslation } from "react-i18next"
import { useConfig } from "../../hooks"

export const useModal = () => {
	const { t } = useTranslation()
	const { config } = useConfig()

	const translations = {
		title: t("mf-timer.title"),
	}

	return {
		translations,
		onCloseProgram: config.onCloseProgram,
	}
}
