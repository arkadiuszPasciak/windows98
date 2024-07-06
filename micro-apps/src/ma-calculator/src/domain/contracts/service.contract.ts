export default interface CalculatorServiceContract {
	value: string

	addNumber(number: number): void
	addDot(): void
	addSign(): void
	summResult(): void
}
