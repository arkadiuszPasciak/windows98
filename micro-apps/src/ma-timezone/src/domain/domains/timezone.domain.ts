import { MSDate } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { TimezoneDomainContract } from "../contracts"
import type { ITimezoneValuePairs, TTimezoneValues } from "../models"

export class TimezoneDomain implements TimezoneDomainContract {
	private msDate: typeof MSDate = MSDate
	public timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>> = null

	constructor() {
		makeAutoObservable(this)
	}

	public generateTimezones(): void {
		const timezones = this.msDate.getTimezones()

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
