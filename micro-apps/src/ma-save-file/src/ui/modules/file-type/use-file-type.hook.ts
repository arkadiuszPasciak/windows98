import { type ReactEventHandler, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { ESaveFileText } from "../../../domain/models"
import { useSaveFile } from "../../hooks"

export const useFileType = () => {
	const { t } = useTranslation()
	const saveFileDomain = useSaveFile()

	const translations = useMemo(() => {
		return {
			saveAs: t("ma-save-file.save-as"),
			text: {
				csv: t("ma-save-file.text-csv"),
				doc: t("ma-save-file.text-doc"),
				rtf: t("ma-save-file.text-rtf"),
				txt: t("ma-save-file.text-txt"),
			},
		}
	}, [t])

	const fileTypes = useMemo(() => {
		return {
			// TODO: it should be settable by config text, pictures and etc files
			text: [
				{
					value: ESaveFileText.CSV,
					name: translations.text.csv,
				},
				{
					value: ESaveFileText.DOC,
					name: translations.text.doc,
				},
				{
					value: ESaveFileText.RTF,
					name: translations.text.rtf,
				},
				{
					value: ESaveFileText.TXT,
					name: translations.text.txt,
				},
			],
		}
	}, [translations.text])

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		saveFileDomain.setFileType(event.currentTarget.value)
	}

	return {
		fileType: saveFileDomain.fileType,
		fileTypes,
		handleSelectChange,
		translations,
	}
}
