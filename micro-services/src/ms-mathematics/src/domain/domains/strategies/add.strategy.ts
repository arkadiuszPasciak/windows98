import type { AddStrategyContract } from "../../contracts"
import type { Numbers, Operation, Sign } from "../../models"

export class AddStrategy implements AddStrategyContract {
	public add(currentOperation: Operation, value: Numbers | Sign): Operation {
		return `${currentOperation}${value}`
	}
}
