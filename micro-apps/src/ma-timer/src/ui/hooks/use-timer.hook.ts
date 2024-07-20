import { useContext } from "react"
import { TimerDomainContext } from "../context/domain.context"

export function useTimer() {
	const timerDomain = useContext(TimerDomainContext)

	return {
		timerDomain,
	}
}
