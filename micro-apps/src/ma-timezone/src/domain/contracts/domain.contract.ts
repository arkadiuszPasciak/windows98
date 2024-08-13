import type { Maybe } from "@windows98/toolkit"
import type { TimezoneRepository } from "../../data/repositories"
import type { ITimezoneValuePairs } from "../models"

export interface TimezoneDomainContract {
	timezoneRepository: TimezoneRepository
	timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>>
	generateTimezones(): void
}
