import type { RemoveStrategyContract } from "../../contracts"
import type { Operation } from "../../models"

export class RemoveStrategy implements RemoveStrategyContract {
	public remove(currentOperation: Operation): Operation {
		const slicedOperation = currentOperation.slice(0, -1)
		return slicedOperation
	}
}
