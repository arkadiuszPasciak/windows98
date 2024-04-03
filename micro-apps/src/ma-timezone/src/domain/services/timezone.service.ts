import TimezoneRepository from "../../data/repositories/timezone.repository"
import type { ITimezoneValuePairs, TTimezoneValues } from "../models/timezone.model"

export default class TimezoneService {
	timezoneRepository: TimezoneRepository = new TimezoneRepository()

	public getTimezones(): Array<ITimezoneValuePairs> {
		const timezones = this.timezoneRepository.getTimezones()

		return this.mapTimezonesToValuePairs(timezones)
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
