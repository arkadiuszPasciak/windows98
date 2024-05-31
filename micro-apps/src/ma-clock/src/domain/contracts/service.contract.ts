import type { Maybe } from "@windows98/toolkit/src/types"

export default interface ClockServiceContract {
	time: Maybe<string>
	getTime(): void
}
