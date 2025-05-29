import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"

export interface ConfigProps {
	onRunProgram: (program: string) => void
	programs: {
		[key: string]: Array<string>
	}[]
}

export const ConfigContext = createContext<ConfigProps>({
	onRunProgram: () => {},
	programs: [],
})

export const Config: FunctionComponent<PropsWithChildren & ConfigProps> = ({
	children,
	onRunProgram,
	programs,
}) => {
	return (
		<ConfigContext.Provider value={{ onRunProgram, programs }}>
			{children}
		</ConfigContext.Provider>
	)
}
