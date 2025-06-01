import type { Maybe } from "@windows98/toolkit"
import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"
import type { PanelItems } from "../../domain/models"

export interface ConfigProps {
	onRunProgram: (program: string) => void
	panelItems: Maybe<PanelItems>
}

export const ConfigContext = createContext<ConfigProps>({
	onRunProgram: () => {},
	panelItems: null,
})

export const Config: FunctionComponent<PropsWithChildren & ConfigProps> = ({
	children,
	onRunProgram,
	panelItems,
}) => {
	return (
		<ConfigContext.Provider value={{ onRunProgram, panelItems }}>
			{children}
		</ConfigContext.Provider>
	)
}
