import type { Maybe } from "@windows98/toolkit"
import type { BatteryManager } from "../../models"
import type { BatteryStatusAPIRepositoryContract } from "../contracts"

// TODO: It's a temporary definition because there is a lack of that in TS
declare global {
	interface Navigator {
		getBattery?(): Promise<BatteryManager>
	}
}

export class BatteryStatusAPIRepository
	implements BatteryStatusAPIRepositoryContract
{
	public async getBattery(): Promise<Maybe<BatteryManager>> {
		try {
			if (!("getBattery" in window.navigator)) {
				return null
			}

			const battery = await window.navigator.getBattery?.()

			if (!battery) return null

			return {
				charging: battery.charging,
				level: battery.level,
				chargingTime: battery.chargingTime,
				dischargingTime: battery.dischargingTime,
			}
		} catch {
			return null
		}
	}
}
