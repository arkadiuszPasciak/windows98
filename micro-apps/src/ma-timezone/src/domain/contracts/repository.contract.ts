import type { TTimezoneValues } from "../models/timezone.model"

export default interface TimezoneRepositoryContract {
	getTimezones(): Array<TTimezoneValues>
}
