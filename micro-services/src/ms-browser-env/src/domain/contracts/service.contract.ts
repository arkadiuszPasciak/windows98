import type { Maybe } from "@windows98/toolkit"
import type { TBrowserName } from "../models/browser.model"
import type { TDevices } from "../models/device.model"
import type { TOperatingSystemAll } from "../models/operating.model"
import type { IScreenInformation } from "../models/screen.model"

export default interface BrowserEnvServiceContract {
    getBrowserName(): Maybe<TBrowserName>
    getDeviceType(): Maybe<TDevices>
    getOperatingSystem(): Maybe<TOperatingSystemAll>
    getScreenInformation(): Maybe<IScreenInformation>
}
