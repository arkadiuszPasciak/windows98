import type { ECalculatorNumber, ECalculatorSymbol } from "../models"

export interface CalculatorDomainContract {
	value: string

	addNumber(number: ECalculatorNumber): void
	addDot(): void
	addSymbol(symbol: ECalculatorSymbol): void
	summResult(): void
}
