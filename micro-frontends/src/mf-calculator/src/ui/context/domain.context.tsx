import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
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
