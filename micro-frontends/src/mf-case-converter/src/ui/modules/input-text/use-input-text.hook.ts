import { debounce } from "@windows98/toolkit"
import type { ReactEventHandler } from "react"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useCaseConverter } from "../../hooks"

export const useInputText = () => {
	const { t } = useTranslation()
	const { domain } = useCaseConverter()

	const translations = {
		label: t("mf-case-generator.input-text.label"),
		placeholder: t("mf-case-generator.input-text.placeholder"),
	}

	const debouncedConvertAllCases = useMemo(
		() => debounce(() => domain.convertAllCases(), 300),
		[domain],
	)

	const inputValue = domain.inputValue
	const setInputValue: ReactEventHandler<HTMLInputElement> = (event) => {
		const newValue = event.currentTarget.value
		domain.setInputValue(newValue)

		if (newValue.length === 0) return

		debouncedConvertAllCases()
	}

	return {
		inputValue,
		setInputValue,
		translations,
	}
}
