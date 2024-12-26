import type { EDay, EMonth, IFormatOptions, TLocalesArgument } from "../models"

export interface DateRepositoryContract {
	getDate(value?: string): number
	getDay(value?: string): EDay
	getFullYear(value?: string): number
	getMonth(value?: string): EMonth
	toLocaleString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string
	toLocaleDateString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string
}
