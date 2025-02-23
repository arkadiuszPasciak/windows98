import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSaveFile } from "../../hooks"

export const useSaveButton = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const saveFile = (): void => {
		saveFileDomain.saveFile()
	}

	const translations = useMemo(() => {
		return {
			save: t("ma-save-file.save"),
		}
	}, [t])

	return {
		saveFile,
		translations,
	}
}
