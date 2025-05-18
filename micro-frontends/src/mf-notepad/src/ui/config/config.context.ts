import { createContext } from "react"
import type { ConfigProps } from "./config.types"

const ConfigDefaultContext = {
	onCloseProgram: () => {},
}

export const ConfigContext = createContext<ConfigProps>(ConfigDefaultContext)
