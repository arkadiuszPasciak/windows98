import type { Maybe } from "@windows98/toolkit"

export interface CalendarDomainContract {
	activeDay: Maybe<number>
	daysInMonth: number
	firstDayOfWeek: number
	currentYear: number
	currentMonth: number

	initCalendar(): void
	changeCalendarByYear(year: number): void
	changeCalendarByMonth(month: number): void
	increaseYear(year: number): void
	decreaseYear(year: number): void
}
