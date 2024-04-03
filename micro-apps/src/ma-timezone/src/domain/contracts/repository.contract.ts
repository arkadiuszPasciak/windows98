import { TTimezones } from "../models/timezone.model"

export default interface TimezoneRepositoryContract {
	getTimezones(): TTimezones
}
