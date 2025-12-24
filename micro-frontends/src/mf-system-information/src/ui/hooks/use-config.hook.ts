import { useContext } from "react"
import { ConfigContext } from "../context"

export function useConfig() {
	const { sections } = useContext(ConfigContext)

	return {
		sections,
	}
}
