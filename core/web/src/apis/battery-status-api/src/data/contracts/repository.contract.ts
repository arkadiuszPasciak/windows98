import type { Maybe } from "@windows98/toolkit"
import type { BatteryManager } from "../../models"

export interface BatteryStatusAPIRepositoryContract {
	getBattery(): Promise<Maybe<BatteryManager>>
}
