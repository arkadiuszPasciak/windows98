import type { Maybe } from '@windows98/toolkit/src/types'
import type {
  TUserAgentDevices,
  IUserAgentDevices,
} from '../models/device.model'
import type {
  IUserAgentBrowser,
  TUserAgentBrowsers,
} from '../models/browser.model'
import type {
  TUserAgentAllPlatforms,
  IUserAgentPlatform,
} from '../models/platform.model'

export default interface UserAgentRepositoryContract {
  readonly browserNames: Array<IUserAgentBrowser>
  readonly devicesNames: Array<IUserAgentDevices>
  readonly operationSystems: Array<IUserAgentPlatform>

  getBrowserName(userAgent: string): Maybe<TUserAgentBrowsers>
  getOperatingSystem(userAgent: string): Maybe<TUserAgentAllPlatforms>
  getTypeDevice(userAgent: string): Maybe<TUserAgentDevices>
}
