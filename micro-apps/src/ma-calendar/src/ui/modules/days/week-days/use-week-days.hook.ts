import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export function useWeekDays() {
	const { t } = useTranslation()

	const weekDays = useMemo(
		() => [
			{ id: 0, name: t("ma-calendar.days.sunday") },
			{ id: 1, name: t("ma-calendar.days.monday") },
			{ id: 2, name: t("ma-calendar.days.tuesday") },
			{ id: 3, name: t("ma-calendar.days.wednesday") },
			{ id: 4, name: t("ma-calendar.days.thursday") },
			{ id: 5, name: t("ma-calendar.days.friday") },
			{ id: 6, name: t("ma-calendar.days.saturday") },
		],
		[t],
	)

	return {
		weekDays,
	}
}
