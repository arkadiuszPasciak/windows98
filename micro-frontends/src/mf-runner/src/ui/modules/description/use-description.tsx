import { useTranslation } from "react-i18next"

export function useDescription() {
	const { t } = useTranslation()

	const translations = {
		description: t("mf-runner.description.text"),
	}

	return {
		translations,
	}
}
