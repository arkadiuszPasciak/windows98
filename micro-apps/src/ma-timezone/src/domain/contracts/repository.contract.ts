import type { TTimezoneValues } from "../models"

export interface TimezoneRepositoryContract {
	getTimezones(): Array<TTimezoneValues>
}
