import type { Maybe } from "@windows98/toolkit/src/types"
import type { TBrowserName } from "../models/browser.model"
import type { TDevices } from '../models/device.model'
import type { TOperationSystemAll } from '../models/operation.model'
import type { IScreenInformation } from '../models/screen.model'

export default interface BrowserEnvServiceContract {
  getBrowserName(): Maybe<TBrowserName>
  getDeviceType(): Maybe<TDevices>
  getOperationSystem(): Maybe<TOperationSystemAll>
  getScreenInformation(): Maybe<IScreenInformation>
}
