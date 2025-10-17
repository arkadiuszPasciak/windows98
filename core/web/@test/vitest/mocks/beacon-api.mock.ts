import { vi } from "vitest"

interface BeaconMock {
	sendBeacon: Navigator["sendBeacon"]
}

class BeaconAPIMock {
	public createMock(): BeaconMock {
		return {
			sendBeacon: () => true,
		}
	}

	public implementMock() {
		const { sendBeacon } = this.createMock()

		vi.stubGlobal("navigator", {
			sendBeacon,
		})
	}
}

export const beaconAPIMock = new BeaconAPIMock()
