import { type ReactEventHandler, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useCalendar } from "../../hooks"

export default function useMonthSwitcher() {
	const { t } = useTranslation()
	const calendarDomain = useCalendar()

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		calendarDomain.changeCalendarByMonth(Number(event.currentTarget.value))
	}

	const month = calendarDomain.currentMonth

	const dictionary = useMemo(
		() => ({
			months: [
				{
					value: 0,
					name: t("mf-calendar.month-switcher.january"),
				},
				{
					value: 1,
					name: t("mf-calendar.month-switcher.february"),
				},
				{
					value: 2,
					name: t("mf-calendar.month-switcher.march"),
				},
				{
					value: 3,
					name: t("mf-calendar.month-switcher.april"),
				},
				{
					value: 4,
					name: t("mf-calendar.month-switcher.may"),
				},
				{
					value: 5,
					name: t("mf-calendar.month-switcher.june"),
				},
				{
					value: 6,
					name: t("mf-calendar.month-switcher.july"),
				},
				{
					value: 7,
					name: t("mf-calendar.month-switcher.august"),
				},
				{
					value: 8,
					name: t("mf-calendar.month-switcher.september"),
				},
				{
					value: 9,
					name: t("mf-calendar.month-switcher.october"),
				},
				{
					value: 10,
					name: t("mf-calendar.month-switcher.november"),
				},
				{
					value: 11,
					name: t("mf-calendar.month-switcher.december"),
				},
			],
		}),
		[t],
	)

	return {
		dictionary,
		handleSelectChange,
		month,
	}
}
