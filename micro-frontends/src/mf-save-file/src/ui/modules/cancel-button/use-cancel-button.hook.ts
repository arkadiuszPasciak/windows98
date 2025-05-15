import { useTranslation } from "react-i18next"

export const useCancelButton = () => {
	const { t } = useTranslation()

	const closeModal = (): void => {
		console.log("TODO: pass here a function from the config")
	}

	const translations = {
		cancel: t("mf-save-file.cancel"),
	}

	return {
		closeModal,
		translations,
	}
}
