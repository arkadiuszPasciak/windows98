import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"
import type { ConfigProps } from "./config.type"

export const ConfigContext = createContext<ConfigProps>({
	htmlVideoElement: null,
})

export const ConfigContextComponent: FunctionComponent<
	PropsWithChildren<ConfigProps>
> = ({ children, htmlVideoElement }) => {
	return (
		<ConfigContext.Provider value={{ htmlVideoElement }}>
			{children}
		</ConfigContext.Provider>
	)
}
