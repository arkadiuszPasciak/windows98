import type { Maybe } from "@windows98/toolkit"
import type {
	ScreenInformation,
	TBrowserName,
	TDevices,
	TOperatingSystemAll,
} from "../models"

export default interface BrowserEnvServiceContract {
	getBrowserName(): Maybe<TBrowserName>
	getDeviceType(): Maybe<TDevices>
	getOperatingSystem(): Maybe<TOperatingSystemAll>
	getScreenInformation(): ScreenInformation
}
