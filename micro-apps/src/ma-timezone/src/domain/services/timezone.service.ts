import { observable, action, makeAutoObservable } from "mobx"
import TimezoneRepository from "../../data/repositories/timezone.repository"
import type { ITimezoneValuePairs, TTimezoneValues } from "../models/timezone.model"
import type { Maybe } from "@windows98/toolkit"
import TimezoneServicesContract from "../contracts/service.contract"

export default class TimezoneService implements TimezoneServicesContract {
	@observable
	timezoneRepository: TimezoneRepository = new TimezoneRepository()
	timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>> = null

	constructor() {
		makeAutoObservable(this)
	}

	@action
	public generateTimezones(): void {
		const timezones = this.timezoneRepository.getTimezones()

		this.timezonesValuePairs = this.mapTimezonesToValuePairs(timezones)
	}

	private createI18nKey(timezone: number): string {
		return `ma-timezone.stepper.${timezone}`
	}

	private mapTimezonesToValuePairs(timezones: Array<TTimezoneValues>): Array<ITimezoneValuePairs> {
		return timezones.map((timezone) => {
			return {
				value: timezone,
				label: this.createI18nKey(timezone)
			}
		})
	}
}

export const timezoneService = new TimezoneService()
