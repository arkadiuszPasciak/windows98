import useClock from "../../hooks/use-clock.hook"

export function useTime() {
	const { clockService } = useClock()

	setInterval(clockService.getTime, 1000)

	return {
		time: clockService.time
	}
}
