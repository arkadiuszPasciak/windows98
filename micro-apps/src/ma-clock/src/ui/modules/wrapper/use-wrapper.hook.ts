import useClock from "../../hooks/use-clock.hook"

export function useWrapper() {
	const { clockService } = useClock()

	clockService.getTime()
}
