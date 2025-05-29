import { useContext } from "react"
import { DomainContext } from "../context"

export function useDomain() {
	const store = useContext(DomainContext)

	return {
		runnerDomain: store,
	}
}
