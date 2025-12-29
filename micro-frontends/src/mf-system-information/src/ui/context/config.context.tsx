import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import type { InformationModel } from "../../domain/models"

export interface ConfigProps extends PropsWithChildren {
	sections: Array<InformationModel>
}

export const ConfigContext = createContext<ConfigProps>({
	sections: [],
})

export const ConfigComponent: FunctionComponent<ConfigProps> = ({
	children,
	sections,
}) => {
	const ConfigContextValue = { sections }

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
