import { useTranslation } from "react-i18next"

export function useInformation() {
	const { t } = useTranslation()

	const translations = {
		text: t("mf-image-converter.information.text"),
	}

	return {
		translations,
	}
}
