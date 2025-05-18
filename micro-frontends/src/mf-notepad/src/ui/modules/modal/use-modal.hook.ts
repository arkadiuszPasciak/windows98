import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"

export const useModal = () => {
	const { t } = useTranslation()
	const { onCloseProgram } = useConfig()

	const translations = {
		title: t("mf-notepad.title"),
	}

	return {
		translations,
		onCloseProgram,
	}
}
