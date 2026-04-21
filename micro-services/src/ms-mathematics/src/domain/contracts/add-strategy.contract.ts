import type { Numbers, Operation, Sign } from "../models"

export interface AddStrategyContract {
	add(currentOperation: Operation, value: Numbers | Sign): Operation
}
