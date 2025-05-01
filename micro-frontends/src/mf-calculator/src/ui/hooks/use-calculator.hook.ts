import { useContext } from "react"
import { DomainContext } from "../context"

export function useCalculator() {
	const store = useContext(DomainContext)

	return {
		calculatorDomain: store,
	}
}
