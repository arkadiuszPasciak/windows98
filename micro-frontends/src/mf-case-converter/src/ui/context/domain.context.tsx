import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
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
