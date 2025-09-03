import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useQRCodeGenerator } from "../../hooks"

export const useInputText = () => {
	const { t } = useTranslation()
	const { domain } = useQRCodeGenerator()

	const translations = {
		label: t("mf-qr-code-generator.input-text.label"),
		placeholder: t("mf-qr-code-generator.input-text.placeholder"),
	}

	const inputValue = domain.content
	const setInputValue: ReactEventHandler<HTMLInputElement> = (event) => {
		const newValue = event.currentTarget.value
		domain.setContent(newValue)

		if (newValue.length === 0) return
	}

	return {
		inputValue,
		setInputValue,
		translations,
	}
}
