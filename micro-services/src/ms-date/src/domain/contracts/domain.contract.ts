import type { IFormatOptions, TLocalesArgument } from "../models"

export interface DateDomainContract {
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
