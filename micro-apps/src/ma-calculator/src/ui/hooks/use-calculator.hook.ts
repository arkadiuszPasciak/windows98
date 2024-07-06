import { useContext } from "react"
import { CalculatorDomainContext } from "../context/domain.context"

export default function useCalculator() {
	const store = useContext(CalculatorDomainContext)

	return {
		calculatorDomain: store,
	}
}
