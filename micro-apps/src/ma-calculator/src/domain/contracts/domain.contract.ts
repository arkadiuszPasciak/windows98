export default interface CalculatorDomainContract {
	value: string

	addNumber(number: number): void
	addDot(): void
	addSign(sign: string): void
	summResult(): void
}
