import type { Maybe } from "@windows98/toolkit"
import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"
import type { MenuItems } from "../../domain/models"

export interface ConfigProps {
	onRunProgram: (program: string) => void
	menuItems: Maybe<MenuItems>
}

export const ConfigContext = createContext<ConfigProps>({
	onRunProgram: () => {},
	menuItems: null,
})

export const Config: FunctionComponent<PropsWithChildren & ConfigProps> = ({
	children,
	onRunProgram,
	menuItems,
}) => {
	return (
		<ConfigContext.Provider value={{ onRunProgram, menuItems }}>
			{children}
		</ConfigContext.Provider>
	)
}
