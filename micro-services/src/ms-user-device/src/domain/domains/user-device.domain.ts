import type { Maybe } from "@windows98/toolkit"
import {
	BatteryStatusAPI,
	DeviceMemoryAPI,
	FullscreenAPI,
	NetworkInformationAPI,
	ScreenAPI,
	ScreenOrientationAPI,
} from "@windows98/web"
import type { UserDeviceDomainContract } from "../contracts"
import type {
	BatteryInformation,
	MemoryInformation,
	NetworkInformation,
	ScreenInformation,
} from "../models"

export class UserDeviceDomain implements UserDeviceDomainContract {
	private batteryStatusAPI: BatteryStatusAPI
	private deviceMemoryAPI: DeviceMemoryAPI
	private fullscreenAPI: FullscreenAPI
	private networkInformationAPI: NetworkInformationAPI
	private screenAPI: ScreenAPI
	private screenOrientationAPI: ScreenOrientationAPI

	constructor() {
		this.batteryStatusAPI = new BatteryStatusAPI()
		this.deviceMemoryAPI = new DeviceMemoryAPI()
		this.fullscreenAPI = new FullscreenAPI()
		this.networkInformationAPI = new NetworkInformationAPI()
		this.screenAPI = new ScreenAPI()
		this.screenOrientationAPI = new ScreenOrientationAPI()
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

	public getNetworkInformation(): Maybe<NetworkInformation> {
		try {
			const networkInfo = this.networkInformationAPI.getState()

			if (!networkInfo) return null

			return {
				connectionType: networkInfo.type,
				effectiveConnectionType: networkInfo.effectiveType,
				downlinkInMbps: networkInfo.downlink,
				downlinkMaxInMbps: networkInfo.downlinkMax,
				roundTripTimeInMilliseconds: networkInfo.rtt,
				isSaveData: networkInfo.saveData,
			}
		} catch {
			return null
		}
	}

	public getScreenInformation(): Maybe<ScreenInformation> {
		try {
			const angleInDegrees = this.screenOrientationAPI.angle
			const heightInPx = this.screenAPI.getHeight()
			const isFullscreen = this.fullscreenAPI.isFullscreen()
			const orientationType = this.screenOrientationAPI.type
			const widthInPx = this.screenAPI.getWidth()

			return {
				angleInDegrees,
				heightInPx,
				isFullscreen,
				orientationType,
				widthInPx,
			}
		} catch {
			return null
		}
	}
}

export const MSUserDevice = new UserDeviceDomain()
