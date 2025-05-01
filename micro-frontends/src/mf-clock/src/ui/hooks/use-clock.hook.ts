import { useContext } from "react"
import { DomainContext } from "../context"

export function useClock() {
	const clockDomain = useContext(DomainContext)

	return clockDomain
}
