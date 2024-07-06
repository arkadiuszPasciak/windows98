import { CalculatorDomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"
import { calculatorDomain } from "../../domain/domains"

export const CalculatorView = () => {
	return (
		<CalculatorDomainContext.Provider value={calculatorDomain}>
			<Wrapper />
		</CalculatorDomainContext.Provider>
	)
}
