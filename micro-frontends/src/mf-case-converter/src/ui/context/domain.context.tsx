import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { caseConverterDomain } from "../../domain/domains"

export const DomainContext = createContext(caseConverterDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={caseConverterDomain}>
			{children}
		</DomainContext.Provider>
	)
}
