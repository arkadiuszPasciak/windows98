import { vi } from "vitest"

interface BatteryManager {
	charging: boolean
	level: number
	chargingTime: number
	dischargingTime: number
}

class BatteryStatusAPIMock {
	public createMock(battery: BatteryManager): BatteryManager {
		return {
			charging: battery.charging,
			level: battery.level,
			chargingTime: battery.chargingTime,
			dischargingTime: battery.dischargingTime,
		}
	}

	public implementMock(batteryStatusMock: BatteryManager) {
		vi.stubGlobal("navigator", {
			getBattery: () => Promise.resolve(batteryStatusMock),
		})
	}
}

export const batteryStatusAPIMock = new BatteryStatusAPIMock()
