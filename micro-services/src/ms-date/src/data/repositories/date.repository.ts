import { MSErrorHandler } from "../../../../ms-error-handler/src"
import type { DateRepositoryContract } from "../../domain/contracts"
import type {
	EDay,
	EMonth,
	IFormatOptions,
	TLocalesArgument,
} from "../../domain/models"

export class DateRepository implements DateRepositoryContract {
	public getDate(value?: string): number {
		return this.createDate(value).getDate()
	}

	public getDay(value?: string): EDay {
		return this.createDate(value).getDay()
	}

	public getFullYear(value?: string): number {
		return this.createDate(value).getFullYear()
	}

	public getHours(value?: string): number {
		return this.createDate(value).getHours()
	}

	public getMilliseconds(value?: string): number {
		return this.createDate(value).getMilliseconds()
	}

	public getMinutes(value?: string): number {
		return this.createDate(value).getMinutes()
	}

	public getMonth(value?: string): EMonth {
		return this.createDate(value).getMonth()
	}

	public getSeconds(value?: string): number {
		return this.createDate(value).getSeconds()
	}

	public toLocaleString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.createDate(value).toLocaleString(locales, options)
	}

	public toLocaleDateString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.createDate(value).toLocaleDateString(locales, options)
	}

	public toLocaleTimeString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.createDate(value).toLocaleTimeString(locales, options)
	}

	@MSErrorHandler.CatchError("DateRepository", "CatchError")
	private createDate(value?: string): Date {
		if (value && !this.isValidDate(value)) {
			throw new Error(`Invalid date string: ${value}`)
		}

		return value ? new Date(value) : new Date()
	}

	private isValidDate(value: string): boolean {
		return !Number.isNaN(Date.parse(value))
	}
}
