import type { Maybe } from "@windows98/toolkit"

export interface ClockDomainContract {
	time: Maybe<string>

	updateTime(): void
}
