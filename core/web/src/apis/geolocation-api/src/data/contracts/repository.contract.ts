export interface GeolocationAPIRepositoryContract {
	clearWatch(watchId: number): void
	getCurrentPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback | null | undefined,
		options?: PositionOptions | undefined,
	): void
	watchPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback | null | undefined,
		options?: PositionOptions | undefined,
	): number
}
