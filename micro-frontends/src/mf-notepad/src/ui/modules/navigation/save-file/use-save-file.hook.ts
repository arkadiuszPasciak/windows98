import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNotepad } from "../../../hooks"

export const useSaveFile = () => {
	const notepadDomain = useNotepad()
	const { t } = useTranslation()
	const [modalState, setModal] = useState(false)

	const closeModal = (): void => {
		setModal(false)
	}

	const openModal = (): void => {
		setModal(true)
	}

	const translations = {
		button: t("mf-notepad.save"),
	}

	return {
		closeModal,
		fileTypes: notepadDomain.textFormats,
		openModal,
		modalState,
		text: notepadDomain.text,
		translations,
	}
}
