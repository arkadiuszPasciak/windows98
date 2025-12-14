import type { Maybe } from "@windows98/toolkit"
import type { BatteryInformation } from "../models"

export interface UserDeviceDomainContract {
	getBatteryInformation(): Promise<Maybe<BatteryInformation>>
}
