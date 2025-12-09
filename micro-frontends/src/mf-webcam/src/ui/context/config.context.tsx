import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import type { ConfigProps } from "./config.type"

export const ConfigContext = createContext<ConfigProps>({
	onCloseProgram: () => {},
})

export const ConfigContextComponent: FunctionComponent<
	PropsWithChildren<ConfigProps>
> = ({ children, onCloseProgram }) => {
	return (
		<ConfigContext.Provider value={{ onCloseProgram }}>
			{children}
		</ConfigContext.Provider>
	)
}
