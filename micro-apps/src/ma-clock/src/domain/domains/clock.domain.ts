import { MSDate } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { ClockDomainContract } from "../contracts"

export class ClockDomain implements ClockDomainContract {
	public time: Maybe<string> = null
	private dateDomain: typeof MSDate

	constructor() {
		makeAutoObservable(this)

		this.dateDomain = MSDate
	}

	updateTime(): void {
		const time = this.dateDomain.getTime(undefined, undefined, {
			timeStyle: "short",
		})

		if (time === this.time) return

		this.time = time
	}
}

export const clockDomain = new ClockDomain()
