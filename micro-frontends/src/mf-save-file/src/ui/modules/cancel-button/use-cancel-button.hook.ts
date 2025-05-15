import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"

export const useCancelButton = () => {
	const { t } = useTranslation()
	const { onCloseModal } = useConfig()

	const closeModal = (): void => {
		onCloseModal()
	}

	const translations = {
		cancel: t("mf-save-file.cancel"),
	}

	return {
		closeModal,
		translations,
	}
}
