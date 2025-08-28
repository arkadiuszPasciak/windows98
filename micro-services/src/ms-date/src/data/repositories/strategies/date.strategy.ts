import { CatchError } from "@windows98/toolkit"
import type { DateStrategyContract } from "../../../domain/contracts"

export class DateStrategy implements DateStrategyContract {
	@CatchError()
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
