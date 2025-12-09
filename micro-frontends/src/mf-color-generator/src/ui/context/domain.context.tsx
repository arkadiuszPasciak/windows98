import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { colorGeneratorDomain } from "../../domain/domains"

export const DomainContext = createContext(colorGeneratorDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={colorGeneratorDomain}>
			{children}
		</DomainContext.Provider>
	)
}
