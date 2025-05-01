import { useEffect } from "react"
import { useClock } from "../../hooks"

export function useTime() {
	const clockDomain = useClock()

	useEffect(() => {
		const interval = setInterval(() => {
			clockDomain.updateTime()
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [clockDomain])

	return { time: clockDomain.time }
}
