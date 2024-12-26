import type { DateRepositoryContract } from "../../domain/contracts"
import type {
	EDay,
	EMonth,
	IFormatOptions,
	TLocalesArgument,
} from "../../domain/models"
import { DateStrategy } from "./strategies"

export class DateRepository implements DateRepositoryContract {
	constructor(private readonly dateStrategy = new DateStrategy()) {}

	public getDate(value?: string): number {
		return this.dateStrategy.createDate(value).getDate()
	}

	public getDay(value?: string): EDay {
		return this.dateStrategy.createDate(value).getDay()
	}

	public getFullYear(value?: string): number {
		return this.dateStrategy.createDate(value).getFullYear()
	}

	public getMonth(value?: string): EMonth {
		return this.dateStrategy.createDate(value).getMonth()
	}

	public toLocaleString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.dateStrategy.createDate(value).toLocaleString(locales, options)
	}

	public toLocaleDateString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.dateStrategy
			.createDate(value)
			.toLocaleDateString(locales, options)
	}
}
