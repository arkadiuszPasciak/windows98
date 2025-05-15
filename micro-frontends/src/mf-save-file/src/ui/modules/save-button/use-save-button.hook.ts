import { useTranslation } from "react-i18next"
import { useSaveFile } from "../../hooks"

export const useSaveButton = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const saveFile = (): void => {
		saveFileDomain.saveFile()
	}

	const translations = {
		save: t("mf-save-file.save"),
	}

	return {
		saveFile,
		translations,
	}
}
