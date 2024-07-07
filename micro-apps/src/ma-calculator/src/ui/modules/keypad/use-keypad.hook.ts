import { useCalculator } from "../../hooks"

export function useKeypad() {
	const { calculatorDomain } = useCalculator()

	return {
		addDot: calculatorDomain.addDot,
		addNumber: calculatorDomain.addNumber,
		addSymbol: calculatorDomain.addSymbol,
		summResult: calculatorDomain.summResult,
	}
}
