import { createContext } from "react"
import type { ConfigProps } from "./config.types"

const ConfigDefaultContext = {
	themes: [],
	onChangeTheme: () => {},
}

export const ConfigContext = createContext<ConfigProps>(ConfigDefaultContext)
