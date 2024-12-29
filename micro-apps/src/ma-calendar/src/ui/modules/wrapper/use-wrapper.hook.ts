import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export function useWrapper() {
	const { t } = useTranslation()

	const dictionary = useMemo(
		() => ({
			title: t("ma-calendar.wrapper.title"),
		}),
		[t],
	)

	return {
		title: dictionary.title,
	}
}
