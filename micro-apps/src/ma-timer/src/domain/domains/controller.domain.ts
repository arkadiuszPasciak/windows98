import {
	makeAutoObservable,
} from "mobx"
import type {
	TimerDomainContract,
	TimerControllerDomainContract,
} from "../contracts"
import { ETimerTime } from "../models"

export class TimerControllerDomain implements TimerControllerDomainContract {
	private timerDomain: TimerDomainContract

	constructor(timerDomain: TimerDomainContract) {
		this.timerDomain = timerDomain
		makeAutoObservable(this)
	}

	public increaseSeconds(): void {
		if (this.timerDomain.time.seconds === 59) return

		this.timerDomain.addTime(ETimerTime.SECONDS, 1)
	}

	public decreaseSeconds(): void {
		if (this.timerDomain.time.seconds === 0) return

		this.timerDomain.subtractTime(ETimerTime.SECONDS, 1)
	}

	public increaseMinutes(): void {
		if (this.timerDomain.time.minutes === 59) return

		this.timerDomain.addTime(ETimerTime.MINUTES, 1)
	}

	public decreaseMinutes(): void {
		if (this.timerDomain.time.minutes === 0) return

		this.timerDomain.subtractTime(ETimerTime.MINUTES, 1)
	}

	public increaseHours(): void {
		if (this.timerDomain.time.hours === 59) return

		this.timerDomain.addTime(ETimerTime.HOURS, 1)
	}

	public decreaseHours(): void {
		if (this.timerDomain.time.hours === 0) return

		this.timerDomain.subtractTime(ETimerTime.HOURS, 1)
	}
}
