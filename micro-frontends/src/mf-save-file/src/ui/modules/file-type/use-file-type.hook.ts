import { type ReactEventHandler, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSaveFile } from "../../hooks"

export const useFileType = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const translations = {
		saveAs: t("mf-save-file.save-as"),
		text: {
			csv: t("mf-save-file.text-csv"),
			doc: t("mf-save-file.text-doc"),
			rtf: t("mf-save-file.text-rtf"),
			txt: t("mf-save-file.text-txt"),
		},
	}

	// TODO: create a file type based on the config
	const fileTypes = {
		text: [
			{
				value: "csv",
				name: translations.text.csv,
			},
			{
				value: "doc",
				name: translations.text.doc,
			},
			{
				value: "rtf",
				name: translations.text.rtf,
			},
			{
				value: "txt",
				name: translations.text.txt,
			},
		],
	}

	const setFileType: ReactEventHandler<HTMLSelectElement> = (event) => {
		saveFileDomain.setFileType(event.currentTarget.value)
	}

	useEffect(() => {
		setDefaultFileType()
	}, [])

	const setDefaultFileType = (): void => {
		saveFileDomain.fileType = fileTypes.text[0].value
	}

	return {
		fileType: saveFileDomain.fileType,
		fileTypes,
		setFileType,
		translations,
	}
}
