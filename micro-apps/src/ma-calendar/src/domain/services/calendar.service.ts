import { observable, action, makeAutoObservable } from "mobx"
import CalendarRepository from "../../data/repositories/calendar.repository"
import type { CalendarServiceContract } from "../contracts/service.contract"
import type { Maybe } from "@windows98/toolkit/src/types"
import type { ICalendarDays } from "../models/days.model"

export default class CalendarService implements CalendarServiceContract {
	@observable
		calendar: Maybe<Array<ICalendarDays>> = null
	year: Maybe<number> = null
	month: Maybe<number> = null
	calendarRepository: CalendarRepository = new CalendarRepository()

	constructor() {
		makeAutoObservable(this)
	}

	@action
	generateCalendar(date?: Date): void {
		this.calendarRepository.initCalendar(date || null)

		this.calendar = this.calendarRepository.days
		this.year = this.calendarRepository.year
		this.month = this.calendarRepository.month
	}

	@action
	changeCalendarByYear(): void {
		if ((!this.month && this.month !== 0) || !this.year) {
			return
		}

		const date = new Date(this.year, this.month)

		this.generateCalendar(date)
	}

	@action
	changeCalendarByMonth(month: number): void {
		if (!this.year) {
			return
		}

		const date = new Date(this.year, month)

		this.generateCalendar(date)
	}

	@action
	increaseYear(): void {
		if (!this.year) return

		this.year += 1

		this.changeCalendarByYear()
	}

	@action
	decreaseYear(): void {
		if (!this.year) return

		this.year -= 1

		this.changeCalendarByYear()
	}
}

export const calendarService = new CalendarService()
