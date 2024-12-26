import { DateRepository, TimeRepository } from "../../data/repositories"
import type { DateDomainContract } from "../contracts"
import type { IFormatOptions, TLocalesArgument } from "../models"

export class DateDomain implements DateDomainContract {
	constructor(
		private readonly dateRepository = new DateRepository(),
		private readonly timeRepository = new TimeRepository(),
	) {}

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

	public getTime(
		value?: string,
		locales?: TLocalesArgument,
		options?: IFormatOptions,
	): string {
		return this.timeRepository.toLocaleTimeString(value, locales, options)
	}
}
