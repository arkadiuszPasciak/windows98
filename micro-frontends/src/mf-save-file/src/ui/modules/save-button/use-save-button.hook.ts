import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"
import { useSaveFile } from "../../hooks"

export const useSaveButton = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()
	const { onCloseModal } = useConfig()

	const saveFile = (): void => {
		saveFileDomain.saveFile()

		onCloseModal()
	}

	const translations = {
		save: t("mf-save-file.save"),
	}

	return {
		saveFile,
		translations,
	}
}
