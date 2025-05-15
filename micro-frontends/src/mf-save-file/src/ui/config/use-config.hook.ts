import { useContext } from "react"
import { ConfigContext } from "./config.context"

export const useConfig = () => {
	return useContext(ConfigContext)
}
