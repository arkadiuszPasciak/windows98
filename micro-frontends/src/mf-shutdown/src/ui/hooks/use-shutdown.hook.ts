import { useContext } from "react"
import { DomainContext } from "../context"

export function useShutdown() {
	const store = useContext(DomainContext)

	return {
		shutdownDomain: store,
	}
}
