import type { Maybe } from '@windows98/toolkit/src/types'
import type { TUserAgentDevices } from '../models/device.model'
import type { TUserAgentBrowsers } from '../models/browser.model'
import type { TUserAgentAllPlatforms } from '../models/platform.model'

export default interface UserAgentServiceContract {
  getBrowserName(userAgent: string): Maybe<TUserAgentBrowsers>
  getOperatingSystem(userAgent: string): Maybe<TUserAgentAllPlatforms>
  getTypeDevice(userAgent: string): Maybe<TUserAgentDevices>
}
