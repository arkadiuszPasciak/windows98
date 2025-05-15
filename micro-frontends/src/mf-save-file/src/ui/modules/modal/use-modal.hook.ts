import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"
import { useSaveFile } from "../../hooks"

export const useModal = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()
	const { onCloseModal, contentFile } = useConfig()

	const closeModal = (): void => {
		onCloseModal()
	}

	const saveFile = (): void => {
		saveFileDomain.saveFile()
	}

	const translations = {
		modalTitle: t("mf-save-file.modal-title"),
	}

	useEffect(() => {
		saveFileDomain.setContent(contentFile)
	}, [contentFile, saveFileDomain.setContent])

	return {
		closeModal,
		saveFile,
		translations,
	}
}
