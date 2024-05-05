import type { Maybe } from "@windows98/toolkit/src/types"
import type { TimeStyle } from "../../domain/models/clock.model"
import type ClockRepositoryContract from "../../domain/contracts/repository.contract"

export default class ClockRepository implements ClockRepositoryContract {
	public get(timeStyle: TimeStyle = "short"): Maybe<string> {
		const date = new Date()

		return date.toLocaleString([], { timeStyle: timeStyle })
	}
}
