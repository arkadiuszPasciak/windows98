import type { Maybe } from "@windows98/toolkit"
import type { DeviceMemoryAPIRepositoryContract } from "../contracts"

export class DeviceMemoryAPIRepository
	implements DeviceMemoryAPIRepositoryContract
{
	public getDeviceMemory(): Maybe<number> {
		if (!("deviceMemory" in window.navigator)) return null

		if (typeof window.navigator.deviceMemory !== "number") return null

		return window.navigator.deviceMemory
	}
}
