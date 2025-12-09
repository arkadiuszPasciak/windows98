import type { ETimerStatus, ETimerTime, ITimerTime } from "../models"
import type {
	TimerControllerDomainContract,
	TimerPlayerDomainContract,
	TimerPresetsDomainContract,
} from "."

export interface TimerDomainContract {
	controllerDomain: TimerControllerDomainContract
	playerDomain: TimerPlayerDomainContract
	presetsDomain: TimerPresetsDomainContract

	time: ITimerTime
	status: ETimerStatus

	addTime(unit: ETimerTime, number: number): void
	subtractTime(unit: ETimerTime, number: number): void
	setTime(unit: ETimerTime, number: number): void

	setStatus(status: ETimerStatus): void
}
