import type { ErrorType, Operation } from "../models"

export interface ValidatorStrategyContract {
	validate(currentOperation: Operation): ErrorType | true
}
