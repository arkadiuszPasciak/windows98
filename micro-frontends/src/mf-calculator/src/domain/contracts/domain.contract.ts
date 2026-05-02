import type { ErrorType, Numbers, Operation, Sign } from "../models"

export interface CalculatorDomainContract {
	currentOperation: Operation

	add(value: Numbers | Sign): void
	clear(): void
	equal(): void
	remove(): void
	validate(): true | ErrorType
}
