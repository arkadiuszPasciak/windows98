import {
	CalendarRepository,
	DateRepository,
	MonthRepository,
	TimeRepository,
	TimezoneRepository,
	YearRepository,
} from "../../data/repositories"
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
		private readonly timezoneRepository = new TimezoneRepository(),
		private readonly yearRepository = new YearRepository(),
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

	public getTimezones(): Array<number> {
		return this.timezoneRepository.get()
	}

	public getYear(value?: string): number {
		return this.yearRepository.get(value)
	}
}
