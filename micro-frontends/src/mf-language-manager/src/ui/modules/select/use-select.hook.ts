import { type ReactEventHandler, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useConfig } from "../../config"
import { useLanguageManager } from "../../hooks"

export default function useSelect() {
	const { t } = useTranslation()
	const languageManagerDomain = useLanguageManager()
	const { languages, onChangeLanguage } = useConfig()

	// biome-ignore lint/correctness/useExhaustiveDependencies: only run once
	useEffect(() => {
		languageManagerDomain.initLanguage()
	}, [])

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		languageManagerDomain.setLanguage(event.currentTarget.value)

		onChangeLanguage(event.currentTarget.value)
	}

	const language = languageManagerDomain.language

	const languageOptions = languages.map((language) => ({
		value: language,
		name: t(`mf-language-manager.language.${language}`),
	}))

	return {
		language,
		languageOptions,
		handleSelectChange,
	}
}
