import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { DateStrategyContract } from "../../../domain/contracts"

export class DateStrategy implements DateStrategyContract {
	@MSErrorHandler.CatchError("DateStrategy", "createDate")
	public createDate(value?: string): Date {
		if (value && !this.isValidDate(value)) {
			throw new Error(`Invalid date string: ${value}`)
		}

		return value ? new Date(value) : new Date()
	}

	private isValidDate(value: string): boolean {
		return !Number.isNaN(Date.parse(value))
	}
}
