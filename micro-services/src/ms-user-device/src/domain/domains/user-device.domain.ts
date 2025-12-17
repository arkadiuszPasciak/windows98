import type { Maybe } from "@windows98/toolkit"
import { BatteryStatusAPI } from "@windows98/web"
import type { UserDeviceDomainContract } from "../contracts"
import type { BatteryInformation } from "../models"

export class UserDeviceDomain implements UserDeviceDomainContract {
	private batteryStatusAPI: BatteryStatusAPI

	constructor() {
		this.batteryStatusAPI = new BatteryStatusAPI()
	}

	public async getBatteryInformation(): Promise<Maybe<BatteryInformation>> {
		try {
			const batteryStatus = await this.batteryStatusAPI.getBattery()

			if (!batteryStatus) return null

			return {
				isCharging: batteryStatus.charging,
				batteryLevel: batteryStatus.level * 100,
				chargingTimeInMinutes: batteryStatus.chargingTime / 60,
				dischargingTimeInMinutes: batteryStatus.dischargingTime / 60,
			}
		} catch {
			return null
		}
	}
}

export const MSUserDevice = new UserDeviceDomain()
