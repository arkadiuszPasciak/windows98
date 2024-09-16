import { useContext } from "react"
import { DomainContext } from "../context"

export function useTheme() {
	const store = useContext(DomainContext)

	return {
		themeDomain: store,
	}
}
