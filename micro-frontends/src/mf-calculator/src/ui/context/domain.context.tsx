import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { calculatorDomain } from "../../domain/domains"

export const DomainContext = createContext(calculatorDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={calculatorDomain}>
			{children}
		</DomainContext.Provider>
	)
}
