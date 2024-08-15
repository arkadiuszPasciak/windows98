import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import { TimezoneRepository } from "../../data/repositories"
import type { TimezoneDomainContract } from "../contracts"
import type { ITimezoneValuePairs, TTimezoneValues } from "../models"

export class TimezoneDomain implements TimezoneDomainContract {
	timezoneRepository: TimezoneRepository = new TimezoneRepository()
	timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>> = null

	constructor() {
		makeAutoObservable(this)
	}

	public generateTimezones(): void {
		const timezones = this.timezoneRepository.getTimezones()

		this.timezonesValuePairs = this.mapTimezonesToValuePairs(timezones)
	}

	private createI18nKey(timezone: number): string {
		return `ma-timezone.stepper.${timezone}`
	}

	private mapTimezonesToValuePairs(
		timezones: Array<TTimezoneValues>,
	): Array<ITimezoneValuePairs> {
		return timezones.map((timezone) => {
			return {
				value: timezone,
				label: this.createI18nKey(timezone),
			}
		})
	}
}

export const timezoneDomain = new TimezoneDomain()
