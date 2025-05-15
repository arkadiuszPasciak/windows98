import { type ReactEventHandler, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"
import { useSaveFile } from "../../hooks"

export const useFileType = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()
	const { fileTypes } = useConfig()

	const translations = {
		saveAs: t("mf-save-file.save-as"),
	}

	const fileTypeOptions = fileTypes.map((fileType) => ({
		value: `${fileType};charset=utf-8;`,
		name: t(`mf-save-file.${fileType}`),
	}))

	const setFileType: ReactEventHandler<HTMLSelectElement> = (event) => {
		saveFileDomain.setFileType(event.currentTarget.value)
	}

	useEffect(() => {
		setDefaultFileType()
	}, [])

	const setDefaultFileType = (): void => {
		saveFileDomain.fileType = fileTypeOptions[0].value
	}

	return {
		fileType: saveFileDomain.fileType,
		fileTypeOptions,
		setFileType,
		translations,
	}
}
