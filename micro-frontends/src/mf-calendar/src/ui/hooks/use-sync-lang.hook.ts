import { useEffect } from "react"
import { useTranslation } from "react-i18next"

// @TODO It's temporary solution, I need to figure out how to sync lang with more than one micro-app
export function useSyncLang() {
	const { i18n } = useTranslation()

	useEffect(() => {
		const htmlLang = document.documentElement.lang

		if (htmlLang) i18n.changeLanguage(htmlLang)
	})

	useEffect(() => {
		const htmlLangObserver = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (
					mutation.type === "attributes" &&
					mutation.attributeName === "lang"
				) {
					i18n.changeLanguage((mutation.target as HTMLElement).lang)
				}
			}
		})

		htmlLangObserver.observe(document.documentElement, { attributes: true })

		return () => {
			htmlLangObserver.disconnect()
		}
	}, [i18n])
}
