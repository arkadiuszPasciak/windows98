import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"
import {
	ticTacToeGameDomain,
	ticTacToeStarterDomain,
} from "../../domain/domains"

export const GameDomainContext = createContext(ticTacToeGameDomain)
export const StarterDomainContext = createContext(ticTacToeStarterDomain)

export const DomainContextComponent: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<GameDomainContext.Provider value={ticTacToeGameDomain}>
			<StarterDomainContext.Provider value={ticTacToeStarterDomain}>
				{children}
			</StarterDomainContext.Provider>
		</GameDomainContext.Provider>
	)
}
