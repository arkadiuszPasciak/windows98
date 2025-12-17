import type { Maybe } from "@windows98/toolkit"
import type {
	BatteryInformation,
	MemoryInformation,
	NetworkInformation,
} from "../models"

export interface UserDeviceDomainContract {
	getBatteryInformation(): Promise<Maybe<BatteryInformation>>
	getMemoryInformation(): Maybe<MemoryInformation>
	getNetworkInformation(): Maybe<NetworkInformation>
}
