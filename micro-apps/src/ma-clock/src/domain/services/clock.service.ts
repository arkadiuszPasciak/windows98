import { observable, action, makeAutoObservable } from "mobx"
import ClockRepository from "../../data/repositories/clock.repository"
import type { Maybe } from "@windows98/toolkit/src/types"
import type ClockServiceContract from "../contracts/service.contract"

export default class ClockService implements ClockServiceContract {
	@observable
	public time: Maybe<string> = null
	private clockRepository: ClockRepository = new ClockRepository()

	constructor() {
		makeAutoObservable(this)
	}

	@action
	public get(): void {
		this.time = this.clockRepository.get()
	}
}

export const clockService = new ClockService()
