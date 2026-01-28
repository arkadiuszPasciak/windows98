import {
	createContext,
	type FunctionComponent,
	type PropsWithChildren,
} from "react"

export interface ConfigProps {
	onCloseProgram: () => void
}

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
