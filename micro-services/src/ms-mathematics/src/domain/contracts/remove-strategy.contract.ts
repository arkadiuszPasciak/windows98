import type { Operation } from "../models"

export interface RemoveStrategyContract {
	remove(currentOperation: Operation): Operation
}
