import type { ErrorType } from "../models"

export interface ValidatorStrategyContract {
	validate(currentOperation: string): ErrorType | true
}
