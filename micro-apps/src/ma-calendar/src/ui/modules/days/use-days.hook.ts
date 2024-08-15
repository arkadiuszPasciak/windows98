import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useCalendar } from "../../hooks"

export function useDays() {
	const { calendarDomain } = useCalendar()
	const { t } = useTranslation()

	const monthDays = useMemo(
		() =>
			calendarDomain.calendar?.map((day, index) => ({
				id: index,
				value: day.value,
				status: day.status,
			})),
		[calendarDomain.calendar],
	)

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
		monthDays,
		weekDays,
	}
}
