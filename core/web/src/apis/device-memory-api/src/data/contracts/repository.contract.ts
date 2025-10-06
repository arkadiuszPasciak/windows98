import type { Maybe } from "@windows98/toolkit"

export interface DeviceMemoryAPIRepositoryContract {
	getDeviceMemory(): Maybe<number>
}
