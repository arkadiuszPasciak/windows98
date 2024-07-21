import {
	makeAutoObservable,
} from "mobx"
import { TimerControllerDomainContract, TimerDomainContract, TimerPlayerDomainContract, TimerPresetsDomainContract } from "../contracts"
import {
	ETimerStatus,
	ETimerTime,
	type ITimerTime,
} from "../models"
import { TimerControllerDomain } from "./controller.domain"
import { TimerPlayerDomain } from "./player.domain"
import { TimerPresetsDomain } from "./presets.domain"

export class TimerDomain implements TimerDomainContract {
	public controllerDomain: TimerControllerDomainContract
	public playerDomain: TimerPlayerDomainContract
	public presetsDomain: TimerPresetsDomainContract

	public time: ITimerTime = {
		seconds: 0,
		minutes: 0,
		hours: 0,
	}

	public status: ETimerStatus = ETimerStatus.RESET

	constructor() {
		makeAutoObservable(this)

		this.controllerDomain = new TimerControllerDomain(this)
		this.playerDomain = new TimerPlayerDomain(this)
		this.presetsDomain = new TimerPresetsDomain(this)
	}

	public addTime = (unit: ETimerTime, number: number): void => {
		this.time[unit] += number
	}

	public subtractTime = (unit: ETimerTime, number: number): void => {
		this.time[unit] -= number
	}

	public setTime = (unit: ETimerTime, number: number): void => {
		this.time[unit] = number
	}

	public setStatus = (status: ETimerStatus): void => {
		this.status = status
	}
}

export const timerDomain = new TimerDomain()
