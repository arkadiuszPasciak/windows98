import type { DateRepositoryContract } from "../../domain/contracts"
import type {
	EDay,
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
