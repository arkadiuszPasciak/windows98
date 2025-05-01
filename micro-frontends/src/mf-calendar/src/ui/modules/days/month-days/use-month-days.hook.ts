import { useCalendar } from "../../../hooks"

export function useMonthDays() {
	const calendarDomain = useCalendar()

	const activeDay = calendarDomain.activeDay
	const firstDayOfWeek = calendarDomain.firstDayOfWeek
	const monthDays = calendarDomain.daysInMonth

	return {
		activeDay,
		firstDayOfWeek,
		monthDays,
	}
}
