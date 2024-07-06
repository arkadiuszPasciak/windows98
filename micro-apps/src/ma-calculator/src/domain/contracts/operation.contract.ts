import type { ECalculatorDirect } from "../models"

export interface CalculatorOperationService {
	isValueEqual(
		value: string,
		sign: string,
		direct: ECalculatorDirect,
	): boolean
	isDotExist(value: string): boolean
	isMathematicalSignLast(value: string): boolean
	summResult(value: string): string
	isMathematicalOperation(value: string): boolean
}
