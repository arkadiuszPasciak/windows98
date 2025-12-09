import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { runnerDomain } from "../../domain/domains"

export const DomainContext = createContext(runnerDomain)

export const Domain: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		<DomainContext.Provider value={runnerDomain}>
			{children}
		</DomainContext.Provider>
	)
}
