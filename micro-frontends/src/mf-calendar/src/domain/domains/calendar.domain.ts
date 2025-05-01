import { MSDate } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { CalendarDomainContract } from "../contracts"

export class CalendarDomain implements CalendarDomainContract {
	public activeDay: Maybe<number> = null
	public daysInMonth = 0
	public firstDayOfWeek = 0
	public currentYear = 0
	public currentMonth = 0

	constructor(private readonly msDateDomain: typeof MSDate = MSDate) {
		makeAutoObservable(this)

		this.initCalendar()
	}

	public initCalendar = (): void => {
		const month = this.msDateDomain.getMonth()
		const year = this.msDateDomain.getYear()

		this.generateCalendar(month, year)
	}

	public changeCalendarByYear = (year: number): void => {
		this.generateCalendar(this.currentMonth, year)
	}

	public changeCalendarByMonth = (month: number): void => {
		this.generateCalendar(month, this.currentYear)
	}

	public decreaseYear = (): void => {
		this.currentYear -= 1

		this.generateCalendar(this.currentMonth, this.currentYear)
	}

	public increaseYear = (): void => {
		this.currentYear += 1

		this.generateCalendar(this.currentMonth, this.currentYear)
	}

	private generateCalendar = (month: number, year: number): void => {
		const calendar = this.msDateDomain.getCalendar(month, year)

		this.activeDay = calendar.activeDay
		this.daysInMonth = calendar.daysInMonth
		this.firstDayOfWeek = calendar.firstDayOfWeek
		this.currentYear = year
		this.currentMonth = month
	}
}

export const calendarDomain = new CalendarDomain()
