import type {
	EMonth,
	ICalendar,
	IFormatOptions,
	TLocalesArgument,
} from "../models"

export interface DateDomainContract {
	getCalendar(month: EMonth, year: number): ICalendar
	getTime(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string

	getDate(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string

	getDateWithTime(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string
}
