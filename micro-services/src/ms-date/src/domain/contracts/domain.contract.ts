import type {
	EMonth,
	ICalendar,
	IFormatOptions,
	TLocalesArgument,
} from "../models"

export interface DateDomainContract {
	getCalendar(month: EMonth, year: number): ICalendar

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

	getMonth(value?: string): EMonth

	getTime(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string
}
