import type { Maybe } from "@windows98/toolkit"
import type TimezoneRepository from "../../data/repositories/timezone.repository"
import type { ITimezoneValuePairs } from "../models/timezone.model"

export default interface TimezoneServicesContract {
	timezoneRepository: TimezoneRepository
	timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>>
	generateTimezones(): void
}
