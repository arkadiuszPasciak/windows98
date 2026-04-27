import type { ClearStrategyContract } from "../../contracts"
import type { Operation } from "../../models"

export class ClearStrategy implements ClearStrategyContract {
	public clear(): Operation {
		return ""
	}
}
