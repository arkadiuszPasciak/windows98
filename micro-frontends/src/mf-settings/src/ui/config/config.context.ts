import { createContext } from "react"
import type { ConfigProps } from "./config.types"

const ConfigDefaultContext: ConfigProps = {
	generalInformation: [],
	onChangeLanguage: () => {},
	onChangeTheme: () => {},
	onCloseProgram: () => {},
	languages: [],
	themes: [],
}

export const ConfigContext = createContext<ConfigProps>(ConfigDefaultContext)
