import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
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
