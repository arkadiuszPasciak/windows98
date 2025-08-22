import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"
import { webcamDomain } from "../../domain/domains"

export const DomainContext = createContext(webcamDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={webcamDomain}>
			{children}
		</DomainContext.Provider>
	)
}
