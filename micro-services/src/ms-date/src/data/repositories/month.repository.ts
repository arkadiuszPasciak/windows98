import type { MonthRepositoryContract } from "../../domain/contracts"
import type { EMonth } from "../../domain/models"
import { DateStrategy } from "./strategies"

export class MonthRepository implements MonthRepositoryContract {
	constructor(private readonly dateStrategy = new DateStrategy()) {}

	public get(value?: string): EMonth {
		return this.dateStrategy.createDate(value).getMonth()
	}
}
