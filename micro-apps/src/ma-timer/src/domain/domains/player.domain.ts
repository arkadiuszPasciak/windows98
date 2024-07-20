import { makeAutoObservable } from "mobx"
import type {
	TimerDomainContract,
	TimerPlayerDomainContract,
} from "../contracts"
import { ETimerStatus } from "../models"
import type { Maybe } from "@windows98/toolkit"

export class TimerPlayerDomain implements TimerPlayerDomainContract {
	private timerDomain: TimerDomainContract
	private interval: Maybe<NodeJS.Timeout> = null

	constructor(timerDomain: TimerDomainContract) {
		this.timerDomain = timerDomain
		makeAutoObservable(this)
	}

	start(): void {
		this.timerDomain.setStatus(ETimerStatus.PLAY)

		this.interval = setInterval(() => {
			if (
				this.timerDomain.time.hours === 0 &&
				this.timerDomain.time.minutes === 0 &&
				this.timerDomain.time.seconds === 0
			) {
				this.reset()
			}

			if (
				this.timerDomain.time.hours >= 1 &&
				this.timerDomain.time.minutes === 0 &&
				this.timerDomain.time.seconds === 0
			) {
				this.timerDomain.time.hours--
				this.timerDomain.time.minutes = 59
				this.timerDomain.time.seconds = 59
			} else if (
				this.timerDomain.time.seconds === 0 &&
				this.timerDomain.time.minutes >= 1
			) {
				this.timerDomain.time.seconds = 59
				this.timerDomain.time.minutes--
			} else {
				this.timerDomain.time.seconds--
			}
		}, 1000)
	}

	stop(): void {
		this.timerDomain.setStatus(ETimerStatus.STOP)

		this.clearTimerInterval()
	}

	reset(): void {
		this.timerDomain.setStatus(ETimerStatus.RESET)

		this.clearTimerInterval()
	}

	private clearTimerInterval(): void {
		if (this.interval) clearInterval(this.interval)
	}
}
