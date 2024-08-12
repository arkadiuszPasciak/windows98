import { useTimer } from "../../hooks"
import { addZeroBeforeNumber } from "@windows98/toolkit"

export function useScreen() {
	const { timerDomain } = useTimer()

	const hours = addZeroBeforeNumber(timerDomain.time.hours, 10)
	const minutes = addZeroBeforeNumber(timerDomain.time.minutes, 10)
	const seconds = addZeroBeforeNumber(timerDomain.time.seconds, 10)

	return {
		hours,
		minutes,
		seconds,
	}
}
