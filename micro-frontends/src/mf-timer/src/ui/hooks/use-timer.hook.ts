import { useContext } from "react"
import { DomainContext } from "../context"

export function useTimer() {
	const timerDomain = useContext(DomainContext)

	return {
		timerDomain,
	}
}
