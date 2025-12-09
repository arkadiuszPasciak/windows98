import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { shutdownDomain } from "../../domain/domains"

export const DomainContext = createContext(shutdownDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={shutdownDomain}>
			{children}
		</DomainContext.Provider>
	)
}
