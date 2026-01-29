import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { soundRecorderDomain } from "../../domain/domains"

export const DomainContext = createContext(soundRecorderDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={soundRecorderDomain}>
			{children}
		</DomainContext.Provider>
	)
}
