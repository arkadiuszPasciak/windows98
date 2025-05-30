import {
	type FunctionComponent,
	type PropsWithChildren,
	createContext,
} from "react"
import type { Programs } from "../../domain/models"

export interface ConfigProps {
	onCloseProgram: () => void
	onRunProgram: (program: string) => void
	programs: Programs<string>
}

export const ConfigContext = createContext<ConfigProps>({
	onCloseProgram: () => {},
	onRunProgram: () => {},
	programs: [],
})

export const Config: FunctionComponent<PropsWithChildren & ConfigProps> = ({
	children,
	onCloseProgram,
	onRunProgram,
	programs,
}) => {
	return (
		<ConfigContext.Provider value={{ onCloseProgram, onRunProgram, programs }}>
			{children}
		</ConfigContext.Provider>
	)
}
