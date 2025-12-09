import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { snapshotDomain } from "../../domain/domains"

export const DomainContext = createContext(snapshotDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={snapshotDomain}>
			{children}
		</DomainContext.Provider>
	)
}
