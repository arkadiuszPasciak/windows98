import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useCalendar } from "../../hooks"

export function useDays() {
	const { calendarDomain } = useCalendar()
	const { t } = useTranslation()

	const dictionary = useMemo(
		() => ({
			weekDays: [
				t("ma-calendar.days.sunday"),
				t("ma-calendar.days.monday"),
				t("ma-calendar.days.tuesday"),
				t("ma-calendar.days.wednesday"),
				t("ma-calendar.days.thursday"),
				t("ma-calendar.days.friday"),
				t("ma-calendar.days.saturday"),
			],
		}),
		[t],
	)

	return {
		monthDays: calendarDomain.calendar,
		weekDays: dictionary.weekDays,
	}
}
