import { createContext } from "react"
import type { ConfigProps } from "./config.types"

const ConfigDefaultContext = {
	languages: [],
	onChangeLanguage: () => {},
}

export const ConfigContext = createContext<ConfigProps>(ConfigDefaultContext)
