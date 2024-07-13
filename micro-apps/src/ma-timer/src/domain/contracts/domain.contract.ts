import type {
	ETimerStatus,
	ITimerTime,
} from "../models"

export default interface TimerDomainContract {
	time: ITimerTime
	status: ETimerStatus

	setTime(time: ITimerTime): void
	setSeconds(time: number): void
	setMinutes(time: number): void
	setHours(time: number): void

	start(): void
	stop(): void
	reset(): void
}
