import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { imageConverterDomain } from "../../domain/domains"

export const DomainContext = createContext(imageConverterDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={imageConverterDomain}>
			{children}
		</DomainContext.Provider>
	)
}
