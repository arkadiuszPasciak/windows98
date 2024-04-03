import type { ITimezoneValuePairs } from "../models/timezone.model"

export default interface TimezoneServicesContract {
	getTimezones(): ITimezoneValuePairs
}
