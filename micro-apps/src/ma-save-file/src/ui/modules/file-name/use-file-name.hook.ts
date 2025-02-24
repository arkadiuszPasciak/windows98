import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSaveFile } from "../../hooks"

export const useFileName = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const translations = useMemo(() => {
		return {
			fileName: t("ma-save-file.file-name"),
			untitled: t("ma-save-file.untitled"),
		}
	}, [t])

	const setFileName = (value: string): void => {
		saveFileDomain.setFileName(value)
	}

	return {
		setFileName,
		fileName: saveFileDomain.fileName,
		translations,
	}
}
