import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useSaveFile } from "../../hooks"

export const useFileName = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const translations = {
		fileName: t("mf-save-file.file-name"),
		untitled: t("mf-save-file.untitled"),
	}

	const setFileName: ReactEventHandler<HTMLInputElement> = (event) => {
		saveFileDomain.setFileName(event.currentTarget.value)
	}

	return {
		setFileName,
		fileName: saveFileDomain.fileName,
		translations,
	}
}
