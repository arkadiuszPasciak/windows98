import type { Maybe } from "@windows98/toolkit"
import type { CalendarRepositoryContract } from "../../domain/contracts"
import type { EDay, EMonth, ICalendar } from "../../domain/models"
import { DateStrategy } from "./strategies"

export class CalendarRepository implements CalendarRepositoryContract {
	constructor(private readonly dateStrategy = new DateStrategy()) { }

	public get(month: EMonth, year: number): ICalendar {
		const activeDay = this.getActiveDay(month, year)
		const daysInMonth = this.getDaysInMonth(month, year)
		const firstDayOfWeek = this.getFirstDayOfWeek(month, year)

		return {
			activeDay,
			daysInMonth,
			firstDayOfWeek,
		}
	}

	private getActiveDay(month: EMonth, year: number): Maybe<number> {
		const currentDate = this.dateStrategy.createDate()
		const currentYear = currentDate.getFullYear()
		const currentMonth = currentDate.getMonth()

		if (currentYear === year && currentMonth === month) {
			return currentDate.getDate()
		}

		return null
	}

	private getDaysInMonth(month: EMonth, year: number): number {
		const date = this.dateStrategy.createDate()
		date.setFullYear(year, month + 1, 0)

		return date.getDate()
	}

	private getFirstDayOfWeek(month: EMonth, year: number): EDay {
		const date = this.dateStrategy.createDate()
		date.setFullYear(year, month, 1)

		return date.getDay()
	}
}
