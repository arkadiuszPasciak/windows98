import { useMemo, type ReactEventHandler } from "react"
import { useCalendar } from "../../hooks"
import { useTranslation } from "react-i18next"

export default function useMonthSwitcher() {
	const { t } = useTranslation()
	const { calendarDomain } = useCalendar()

	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		calendarDomain.changeCalendarByMonth(Number(event.currentTarget.value))
	}

	const dictionary = useMemo(
		() => ({
			months: [
				{
					value: 0,
					name: t("ma-calendar.month-switcher.january"),
				},
				{
					value: 1,
					name: t("ma-calendar.month-switcher.february"),
				},
				{
					value: 2,
					name: t("ma-calendar.month-switcher.march"),
				},
				{
					value: 3,
					name: t("ma-calendar.month-switcher.april"),
				},
				{
					value: 4,
					name: t("ma-calendar.month-switcher.may"),
				},
				{
					value: 5,
					name: t("ma-calendar.month-switcher.june"),
				},
				{
					value: 6,
					name: t("ma-calendar.month-switcher.july"),
				},
				{
					value: 7,
					name: t("ma-calendar.month-switcher.august"),
				},
				{
					value: 8,
					name: t("ma-calendar.month-switcher.september"),
				},
				{
					value: 9,
					name: t("ma-calendar.month-switcher.october"),
				},
				{
					value: 10,
					name: t("ma-calendar.month-switcher.november"),
				},
				{
					value: 11,
					name: t("ma-calendar.month-switcher.december"),
				},
			]
		}),
		[t],
	)

	return {
		handleSelectChange,
		month: calendarDomain.month,
		months: dictionary.months,
	}
}
