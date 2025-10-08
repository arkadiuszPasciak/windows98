import type { GeolocationAPIRepositoryContract } from "../contracts"

export class GeolocationAPIRepository
	implements GeolocationAPIRepositoryContract
{
	public clearWatch(watchId: number): void {
		window.navigator.geolocation.clearWatch(watchId)
	}

	public getCurrentPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback | null,
		options?: PositionOptions,
	): void {
		window.navigator.geolocation.getCurrentPosition(
			successCallback,
			errorCallback ?? undefined,
			options,
		)
	}

	public watchPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback | null,
		options?: PositionOptions,
	): number {
		return window.navigator.geolocation.watchPosition(
			successCallback,
			errorCallback ?? undefined,
			options,
		)
	}
}
