import { DomainContext } from "../context"
import { Wrapper } from "../modules/wrapper"
import { calculatorDomain } from "../../domain/domains"

// TODO: Add the modal to the calculator view

export const CalculatorView = () => {
	return (
		<DomainContext.Provider value={calculatorDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
