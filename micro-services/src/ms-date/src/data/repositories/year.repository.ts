import type { YearRepositoryContract } from "../../domain/contracts"
import { DateStrategy } from "./strategies"

export class YearRepository implements YearRepositoryContract {
	constructor(private readonly dateStrategy = new DateStrategy()) {}

	public get(value?: string): number {
		return this.dateStrategy.createDate(value).getFullYear()
	}
}
