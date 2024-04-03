import { observable, action, makeAutoObservable } from "mobx"
import TimezoneRepository from "../../data/repositories/timezone.repository"
import type { ITimezoneValuePairs, TTimezoneValues } from "../models/timezone.model"
import type { Maybe } from "@windows98/toolkit/src/types"
import TimezoneServicesContract from "../contracts/service.contract"

export default class TimezoneService implements TimezoneServicesContract {
	@observable
	timezoneRepository: TimezoneRepository = new TimezoneRepository()
	timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>> = null

	constructor() {
		makeAutoObservable(this)
	}

	@action
	public getTimezones(): void {
		const timezones = this.timezoneRepository.getTimezones()

		this.timezonesValuePairs = this.mapTimezonesToValuePairs(timezones)
	}

	private generateI18nKey(timezone: number): string {
		return `ma-timezone.time.${timezone}`
	}

	private mapTimezonesToValuePairs(timezones: Array<TTimezoneValues>): Array<ITimezoneValuePairs> {
		return timezones.map((timezone) => {
			return {
				value: timezone,
				label: this.generateI18nKey(timezone)
			}
		})
	}
}

export const timezoneService = new TimezoneService()
