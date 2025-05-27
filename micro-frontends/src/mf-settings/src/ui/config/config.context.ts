import { createContext } from "react"
import type { ConfigProps } from "./config.types"

const ConfigDefaultContext: ConfigProps = {
	onCloseProgram: () => {},
	languages: [],
	onChangeLanguage: () => {},
	themes: [],
	onChangeTheme: () => {},
}

export const ConfigContext = createContext<ConfigProps>(ConfigDefaultContext)
