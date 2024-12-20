import type { DateRepositoryContract } from "../../domain/contracts"
import type {
	EDay,
	EMonth,
	IFormatOptions,
	TLocalesArgument,
} from "../../domain/models"

export class DateRepository implements DateRepositoryContract {
	public getDate(value?: string): number {
		if (value) return new Date(value).getDate()

		return new Date().getDate()
	}

	public getDay(value?: string): EDay {
		if (value) return new Date(value).getDay()

		return new Date().getDay()
	}

	public getFullYear(value?: string): number {
		if (value) return new Date(value).getFullYear()

		return new Date().getFullYear()
	}

	public getHours(value?: string): number {
		if (value) return new Date(value).getHours()

		return new Date().getHours()
	}

	public getMilliseconds(value?: string): number {
		if (value) return new Date(value).getMilliseconds()

		return new Date().getMilliseconds()
	}

	public getMinutes(value?: string): number {
		if (value) return new Date(value).getMinutes()

		return new Date().getMinutes()
	}

	public getMonth(value?: string): EMonth {
		if (value) return new Date(value).getMonth()

		return new Date().getMonth()
	}

	public getSeconds(value?: string): number {
		if (value) return new Date(value).getSeconds()

		return new Date().getSeconds()
	}

	public toLocaleString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		if (value) return new Date(value).toLocaleString(locales, options)

		return new Date().toLocaleString(locales, options)
	}

	public toLocaleDateString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		if (value) return new Date(value).toLocaleDateString(locales, options)

		return new Date().toLocaleDateString(locales, options)
	}

	public toLocaleTimeString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		if (value) return new Date(value).toLocaleTimeString(locales, options)

		return new Date().toLocaleTimeString(locales, options)
	}
}
