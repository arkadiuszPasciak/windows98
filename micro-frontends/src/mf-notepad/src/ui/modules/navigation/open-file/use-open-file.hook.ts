import { useTranslation } from "react-i18next"
import { useNotepad } from "../../../hooks"

export const useOpenFile = () => {
	const notepadDomain = useNotepad()
	const { t } = useTranslation()

	const openFile = (): void => {
		notepadDomain.openFile()
	}

	const translations = {
		button: t("mf-notepad.open"),
	}

	return {
		openFile,
		translations,
	}
}
