import { useCalendar } from "../../hooks"

export default function useYearSwitcher() {
	const { calendarDomain } = useCalendar()

	const decreaseYear = (): void => {
		calendarDomain.decreaseYear()
	}

	const increaseYear = (): void => {
		calendarDomain.increaseYear()
	}

	return {
		decreaseYear,
		increaseYear,
		year: calendarDomain.year,
	}
}
