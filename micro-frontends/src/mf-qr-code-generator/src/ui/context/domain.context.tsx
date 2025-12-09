import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import { qrCodeGeneratorDomain } from "../../domain/domains"

export const DomainContext = createContext(qrCodeGeneratorDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<DomainContext.Provider value={qrCodeGeneratorDomain}>
			{children}
		</DomainContext.Provider>
	)
}
