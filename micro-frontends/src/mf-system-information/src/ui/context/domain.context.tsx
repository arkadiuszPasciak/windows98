import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"
import { systemInformationDomain } from "../../domain/domains"

export const DomainContext = createContext(systemInformationDomain)

export const Domain: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		<DomainContext.Provider value={systemInformationDomain}>
			{children}
		</DomainContext.Provider>
	)
}
