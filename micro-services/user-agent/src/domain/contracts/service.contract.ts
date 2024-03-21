import type { Maybe } from "@windows98/toolkit/src/types"
import type { TUserAgentDevices } from "../models/device.model"
import type { TUserAgentBrowsers } from "../models/browser.model"
import type { TUserAgentAllPlatforms } from "../models/platform.model"

export default interface UserAgentServiceContract {
  getBrowserName(): Maybe<TUserAgentBrowsers>
  getOperatingSystem(): Maybe<TUserAgentAllPlatforms>
  getTypeDevice(): Maybe<TUserAgentDevices>
}
