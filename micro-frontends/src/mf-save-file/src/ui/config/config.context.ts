import { createContext } from "react"
import type { ConfigProps } from "./config.types"

const ConfigDefaultContext = {
	contentFile: "",
	fileTypes: [""],
	onCloseModal: () => {},
}

export const ConfigContext = createContext<ConfigProps>(ConfigDefaultContext)
