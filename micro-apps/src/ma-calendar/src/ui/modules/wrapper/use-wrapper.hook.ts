import { useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useCalendar } from "../../hooks"

export function useWrapper() {
	const { t } = useTranslation()
	const { calendarDomain } = useCalendar()

	useEffect(() => {
		calendarDomain.generateCalendar()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
