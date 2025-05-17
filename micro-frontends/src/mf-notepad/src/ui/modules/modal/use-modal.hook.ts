import { useTranslation } from "react-i18next"

export const useModal = () => {
	const { t } = useTranslation()

	const translations = {
		title: t("mf-notepad.title"),
	}

	return {
		translations,
	}
}
