import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"

export interface ConfigProps {
	onCloseProgram: () => void
}

export const ConfigContext = createContext<ConfigProps>({
	onCloseProgram: () => {},
})

export const ConfigContextComponent: FunctionComponent<
	ConfigProps & PropsWithChildren
> = ({ children, onCloseProgram }) => {
	const ConfigContextValue = { onCloseProgram }

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
