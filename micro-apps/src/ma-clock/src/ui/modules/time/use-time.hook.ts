import useClock from "../../hooks/use-clock.hook"

export function useTime() {
	const { clockService } = useClock()

	setInterval(clockService.get, 1000)

	return {
		time: clockService.time
	}
}
