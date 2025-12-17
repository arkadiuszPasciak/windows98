import type { Maybe } from "@windows98/toolkit"
import { BatteryStatusAPI, DeviceMemoryAPI } from "@windows98/web"
import type { UserDeviceDomainContract } from "../contracts"
import type { BatteryInformation, MemoryInformation } from "../models"

export class UserDeviceDomain implements UserDeviceDomainContract {
	private batteryStatusAPI: BatteryStatusAPI
	private deviceMemoryAPI: DeviceMemoryAPI

	constructor() {
		this.batteryStatusAPI = new BatteryStatusAPI()
		this.deviceMemoryAPI = new DeviceMemoryAPI()
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

	public getMemoryInformation(): Maybe<MemoryInformation> {
		try {
			const RAMInGB = this.deviceMemoryAPI.getDeviceMemory()

			if (!RAMInGB) return null

			return {
				RAMInGB,
			}
		} catch {
			return null
		}
	}
}

export const MSUserDevice = new UserDeviceDomain()
