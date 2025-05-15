import { useTranslation } from "react-i18next"
import { useSaveFile } from "../../hooks"

export const useModal = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const closeModal = (): void => {
		console.log("TODO: pass here a function from the config")
	}

	const saveFile = (): void => {
		saveFileDomain.saveFile()
	}

	const translations = {
		modalTitle: t("mf-save-file.modal-title"),
	}

	return {
		closeModal,
		saveFile,
		translations,
	}
}
