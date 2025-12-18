import type { Maybe } from "@windows98/toolkit"
import type {
	BatteryInformation,
	MemoryInformation,
	NetworkInformation,
	ScreenInformation,
} from "../models"

export interface UserDeviceDomainContract {
	getBatteryInformation(): Promise<Maybe<BatteryInformation>>
	getMemoryInformation(): Maybe<MemoryInformation>
	getNetworkInformation(): Maybe<NetworkInformation>
	getScreenInformation(): Maybe<ScreenInformation>
}
