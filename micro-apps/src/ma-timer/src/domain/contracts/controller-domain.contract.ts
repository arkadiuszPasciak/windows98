export default interface TimerControllerDomainContract {
	increaseSeconds(seconds: number): void
	decreaseSeconds(seconds: number): void

	increaseMinutes(minutes: number): void
	decreaseMinutes(minutes: number): void

	increaseHours(hours: number): void
	decreaseHours(hours: number): void
}
