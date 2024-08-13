import { makeAutoObservable } from "mobx"
import { CalendarRepository } from "../../data/repositories"
import type { CalendarDomainContract } from "../contracts"
import type { Maybe } from "@windows98/toolkit"
import type { ICalendarDays } from "../models"

export class CalendarDomain implements CalendarDomainContract {
	calendar: Maybe<Array<ICalendarDays>> = null
	year: Maybe<number> = null
	month: Maybe<number> = null
	calendarRepository: CalendarRepository = new CalendarRepository()

	constructor() {
		makeAutoObservable(this)
	}

	generateCalendar(date?: Date): void {
		this.calendarRepository.initCalendar(date || null)

		this.calendar = this.calendarRepository.days
		this.year = this.calendarRepository.year
		this.month = this.calendarRepository.month
	}

	changeCalendarByYear(): void {
		if ((!this.month && this.month !== 0) || !this.year) {
			return
		}

		const date = new Date(this.year, this.month)

		this.generateCalendar(date)
	}

	changeCalendarByMonth(month: number): void {
		if (!this.year) {
			return
		}

		const date = new Date(this.year, month)

		this.generateCalendar(date)
	}

	increaseYear(): void {
		if (!this.year) return

		this.year += 1

		this.changeCalendarByYear()
	}

	decreaseYear(): void {
		if (!this.year) return

		this.year -= 1

		this.changeCalendarByYear()
	}
}

export const calendarDomain = new CalendarDomain()
