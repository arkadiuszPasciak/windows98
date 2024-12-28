import {
	CalendarRepository,
	DateRepository,
	TimeRepository,
} from "../../data/repositories"
import { MonthRepository } from "../../data/repositories/month.repository"
import type { DateDomainContract } from "../contracts"
import type {
	EMonth,
	ICalendar,
	IFormatOptions,
	TLocalesArgument,
} from "../models"

export class DateDomain implements DateDomainContract {
	constructor(
		private readonly calendarRepository = new CalendarRepository(),
		private readonly dateRepository = new DateRepository(),
		private readonly monthRepository = new MonthRepository(),
		private readonly timeRepository = new TimeRepository(),
	) {}

	public getCalendar(month: EMonth, year: number): ICalendar {
		return this.calendarRepository.get(month, year)
	}

	public getDate(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.dateRepository.toLocaleDateString(value, locales, options)
	}

	public getDateWithTime(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.dateRepository.toLocaleString(value, locales, options)
	}

	public getMonth(value?: string): EMonth {
		return this.monthRepository.get(value)
	}

	public getTime(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.timeRepository.toLocaleTimeString(value, locales, options)
	}
}
