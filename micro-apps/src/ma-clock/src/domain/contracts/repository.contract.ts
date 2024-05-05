import type { Maybe } from "@windows98/toolkit/src/types"
import type { TimeStyle } from "../models/clock.model"

export default interface ClockRepositoryContract {
	get(timeStyle: TimeStyle): Maybe<string>
}
