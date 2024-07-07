import type { ECalculatorNumber, ECalculatorSymbol } from "../models"

export default interface CalculatorDomainContract {
	value: string

	addNumber(number: ECalculatorNumber): void
	addDot(): void
	addSymbol(symbol: ECalculatorSymbol): void
	summResult(): void
}
