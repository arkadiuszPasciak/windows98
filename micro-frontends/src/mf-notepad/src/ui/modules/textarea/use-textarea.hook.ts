import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useNotepad } from "../../hooks"

export const useTextarea = () => {
	const { t } = useTranslation()
	const notepadDomain = useNotepad()
	const placeholderText = t("mf-notepad.example")

	const onChange: ReactEventHandler<HTMLTextAreaElement> = (event) => {
		notepadDomain.setText(event.currentTarget.value)
	}

	return {
		placeholderText,
		text: notepadDomain.text,
		onChange,
	}
}
