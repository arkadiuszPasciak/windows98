import { vi } from "vitest"

type CallbackType = "success" | "error"

class GeolocationAPIMock {
	public createMock(callbackType: CallbackType): Geolocation {
		return {
			clearWatch: vi.fn((_watchId: number) => {}),
			getCurrentPosition: vi.fn(
				(
					successCallback: PositionCallback,
					errorCallback?: PositionErrorCallback | null,
					_options?: PositionOptions,
				) => {
					if (callbackType === "success") {
						successCallback(this.getGeolocationPositionSuccess())
					} else {
						errorCallback?.(this.getGeolocationPositionError())
					}
				},
			),
			watchPosition: vi.fn(
				(
					successCallback: PositionCallback,
					errorCallback?: PositionErrorCallback | null,
					_options?: PositionOptions,
				) => {
					if (callbackType === "success") {
						successCallback(this.getGeolocationPositionSuccess())
					} else {
						errorCallback?.(this.getGeolocationPositionError())
					}

					return 1
				},
			),
		}
	}

	public implementMock(geolocationMock: Geolocation) {
		vi.stubGlobal("navigator", {
			geolocation: geolocationMock,
		})
	}

	private getGeolocationPositionSuccess(): GeolocationPosition {
		return {
			coords: {
				latitude: 52.52,
				longitude: 13.405,
				altitude: null,
				accuracy: 10,
				altitudeAccuracy: null,
				heading: null,
				speed: null,
				toJSON: () => ({}),
			},
			timestamp: Date.now(),
			toJSON: () => ({}),
		}
	}

	private getGeolocationPositionError(): GeolocationPositionError {
		return {
			code: 1,
			message: "Geolocation error",
			PERMISSION_DENIED: 1,
			POSITION_UNAVAILABLE: 2,
			TIMEOUT: 3,
		}
	}
}

export const geolocationAPIMock = new GeolocationAPIMock()
