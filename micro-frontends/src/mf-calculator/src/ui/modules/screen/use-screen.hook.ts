import { useCalculator } from "../../hooks"

export function useScreen() {
	const { calculatorDomain } = useCalculator()

	return {
		value: calculatorDomain.value,
	}
}
