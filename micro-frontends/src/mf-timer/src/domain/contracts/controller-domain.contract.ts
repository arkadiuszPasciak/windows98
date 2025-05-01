export interface TimerControllerDomainContract {
	increaseSeconds(): void
	decreaseSeconds(): void

	increaseMinutes(): void
	decreaseMinutes(): void

	increaseHours(): void
	decreaseHours(): void
}
