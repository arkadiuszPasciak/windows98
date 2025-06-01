import { useContext } from "react"
import { ConfigContext } from "../context"

export function useConfig() {
	const config = useContext(ConfigContext)

	return {
		configContext: config,
	}
}
