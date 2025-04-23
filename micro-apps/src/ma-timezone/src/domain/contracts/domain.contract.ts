import type { Maybe } from "@windows98/toolkit"
import type { ITimezoneValuePairs } from "../models"

export interface TimezoneDomainContract {
	timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>>
	generateTimezones(): void
}
