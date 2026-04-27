import type { Operation } from "../models"

export interface EqualStrategyContract {
	equal(currentOperation: Operation): Operation
}
