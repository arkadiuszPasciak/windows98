import { CatchError } from "@windows98/toolkit"
import type { BeaconAPIRepositoryContract } from "../contracts"

export class BeaconAPIRepository implements BeaconAPIRepositoryContract {
	@CatchError()
	public sendBeacon(url: string | URL, data?: BodyInit): boolean {
		if (!window.navigator.sendBeacon) {
			throw new Error("Beacon API is not supported in this environment.")
		}

		return window.navigator.sendBeacon(url, data)
	}
}
