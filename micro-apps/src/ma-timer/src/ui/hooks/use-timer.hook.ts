import { useContext } from "react"
import { TimerDomainContext } from "../context/domain.context"

export function useTimer() {
	const store = useContext(TimerDomainContext)

	return {
		timerDomain: store,
	}
}
