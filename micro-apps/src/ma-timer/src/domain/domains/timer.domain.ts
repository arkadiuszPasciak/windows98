import {
	makeAutoObservable,
} from "mobx"
import { TimerDomainContract } from "../contracts"
import {
	ETimerStatus,
	ETimerTime,
	type ITimerTime,
} from "../models"

export default class TimerDomain implements TimerDomainContract {
	public time: ITimerTime = {
		seconds: 0,
		minutes: 0,
		hours: 0,
	}

	public status: ETimerStatus = ETimerStatus.RESTART

	constructor() {
		makeAutoObservable(this)
	}

	public addTime(unit: ETimerTime, number: number): void {
		this.time[unit] += number
	}

	public subtractTime(unit: ETimerTime, number: number): void {
		this.time[unit] -= number
	}

	public setTime(unit: ETimerTime, number: number): void {
		this.time[unit] = number
	}

	public setStatus(status: ETimerStatus): void {
		this.status = status
	}
}
