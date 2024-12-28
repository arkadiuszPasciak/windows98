import type { TimeRepositoryContract } from "../../domain/contracts"
import type {
	EMonth,
	IFormatOptions,
	TLocalesArgument,
} from "../../domain/models"
import { DateStrategy } from "./strategies"

export class TimeRepository implements TimeRepositoryContract {
	constructor(private readonly dateStrategy = new DateStrategy()) { }

	public getHours(value?: string): number {
		return this.dateStrategy.createDate(value).getHours()
	}

	public getMilliseconds(value?: string): number {
		return this.dateStrategy.createDate(value).getMilliseconds()
	}

	public getMinutes(value?: string): number {
		return this.dateStrategy.createDate(value).getMinutes()
	}

	public getSeconds(value?: string): number {
		return this.dateStrategy.createDate(value).getSeconds()
	}

	public toLocaleTimeString(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.dateStrategy
			.createDate(value)
			.toLocaleTimeString(locales, options)
	}
}
