import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
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
