import { useTranslation } from "react-i18next"

export function usePhoto() {
	const { t } = useTranslation()

	const translations = {
		name: t("mf-snapshot.photo-description"),
	}

	return {
		translations,
	}
}
