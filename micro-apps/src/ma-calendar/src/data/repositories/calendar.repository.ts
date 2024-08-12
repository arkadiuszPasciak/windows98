import { ICalendarDays } from "../../domain/models/days.model"
import CalendarRepositoryContract from "../../domain/contracts/repository.contract"
import type { Maybe } from "@windows98/toolkit"

export default class CalendarRepository implements CalendarRepositoryContract {
	private date: Maybe<Date>
	private firstDayMonth: Maybe<number>
	private lastDateMonth: Maybe<number>
	public year: Maybe<number>
	public month: Maybe<number>
	public days: Maybe<Array<ICalendarDays>>

	constructor() {
		this.date = null
		this.year = null
		this.month = null
		this.days = null
		this.firstDayMonth = null
		this.lastDateMonth = null
	}

	public initCalendar(date: Maybe<Date>): void {
		this.getDate(date)
		this.getFullYear()
		this.getMonth()
		this.getFirstDayMonth()
		this.getLastDateMonth()
		this.generateDays()
	}

	public generateDays(): void {
		const days = [] as Array<ICalendarDays>

		if (this.date === null || this.firstDayMonth === null || this.lastDateMonth === null) throw new Error("Date not found")

		for (let index = this.firstDayMonth; index > 0; index--) {
			days.push({
				status: "inactive",
				value: "",
			})
		}

		for (let index = 1; index <= this.lastDateMonth; index++) {
			const isToday =
				index === this.date.getDate() &&
				this.month === new Date().getMonth() &&
				this.year === new Date().getFullYear()

			days.push({
				status: isToday ? "active" : "normal",
				value: String(index),
			})
		}

		this.days = days
	}

	private getDate(date: Maybe<Date>): void {
		this.date = date ? date : new Date()
	}

	private getFullYear(): void {
		if (this.date === null) throw new Error("Date not found")

		this.year = this.date.getFullYear()
	}

	private getMonth(): void {
		if (this.date === null) throw new Error("Date not found")

		this.month = this.date.getMonth()
	}

	private getFirstDayMonth(): void {
		if (this.year === null || this.month === null) throw new Error("Date not found")

		this.firstDayMonth = new Date(this.year, this.month, 1).getDay()
	}

	private getLastDateMonth(): void {
		if (this.year === null || this.month === null) throw new Error("Date not found")

		this.lastDateMonth = new Date(this.year, this.month + 1, 0).getDate()
	}
}
