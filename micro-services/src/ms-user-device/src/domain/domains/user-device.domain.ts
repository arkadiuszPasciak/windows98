import type { Maybe } from "@windows98/toolkit"
import {
	BatteryStatusAPI,
	DeviceMemoryAPI,
	NetworkInformationAPI,
} from "@windows98/web"
import type { UserDeviceDomainContract } from "../contracts"
import type {
	BatteryInformation,
	MemoryInformation,
	NetworkInformation,
} from "../models"

export class UserDeviceDomain implements UserDeviceDomainContract {
	private batteryStatusAPI: BatteryStatusAPI
	private deviceMemoryAPI: DeviceMemoryAPI
	private networkInformationAPI: NetworkInformationAPI

	constructor() {
		this.batteryStatusAPI = new BatteryStatusAPI()
		this.deviceMemoryAPI = new DeviceMemoryAPI()
		this.networkInformationAPI = new NetworkInformationAPI()
	}

	public getNetworkInformation(): Maybe<NetworkInformation> {
		try {
			const networkInfo = this.networkInformationAPI.getState()

			if (!networkInfo) return null

			return {
				connectionType: networkInfo.type,
				effectiveConnectionType: networkInfo.effectiveType,
				downlinkInMbps: networkInfo.downlink,
				downlinkMaxInMbps: networkInfo.downlinkMax,
				roundeTripTimeInMiliseconds: networkInfo.rtt,
				isSaveData: networkInfo.saveData,
			}
		} catch {
			return null
		}
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

			if (RAMInGB === null) return null

			return {
				RAMInGB,
			}
		} catch {
			return null
		}
	}
}

export const MSUserDevice = new UserDeviceDomain()
