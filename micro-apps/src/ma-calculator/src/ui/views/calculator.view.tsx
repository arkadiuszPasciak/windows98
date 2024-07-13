import { CalculatorDomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"
import { calculatorDomain } from "../../domain/domains"

// TODO: Add the modal to the calculator view

export const CalculatorView = () => {
	return (
		<CalculatorDomainContext.Provider value={calculatorDomain}>
			<Wrapper />
		</CalculatorDomainContext.Provider>
	)
}
