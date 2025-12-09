import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { timerDomain } from "../../domain/domains"

export const DomainContext = createContext(timerDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={timerDomain}>
			{children}
		</DomainContext.Provider>
	)
}
