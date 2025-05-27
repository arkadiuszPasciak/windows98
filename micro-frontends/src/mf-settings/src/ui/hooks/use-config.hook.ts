import { useContext } from "react"
import { ConfigContext } from "../config/config.context"

export const useConfig = () => {
	return useContext(ConfigContext)
}
