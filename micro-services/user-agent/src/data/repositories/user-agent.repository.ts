import UserAgentNames from '../configs/names.config'
import type { Maybe } from '@windows98/toolkit/src/types'
import type UserAgentRepositoryContract from '../../domain/contracts/repository.contract'
import type {
  TUserAgentDevices,
  IUserAgentDevices,
} from '../../domain/models/device.model'
import type {
  IUserAgentBrowser,
  TUserAgentBrowsers,
} from '../../domain/models/browser.model'
import type {
  TUserAgentAllPlatforms,
  IUserAgentPlatform,
} from '../../domain/models/platform.model'

export default class UserAgentRepository
  implements UserAgentRepositoryContract
{
  constructor(
    public readonly browserNames: Array<IUserAgentBrowser> = UserAgentNames.browserNames,
    public readonly devicesNames: Array<IUserAgentDevices> = UserAgentNames.devicesNames,
    public readonly operationSystems: Array<IUserAgentPlatform> = UserAgentNames.operationSystems,
  ) {}

  private getName<ArrayType extends { regex: RegExp; name: string }>(
    userAgent: string,
    listOfTypes: Array<ArrayType>,
  ): Maybe<ArrayType['name']> {
    for (const id in listOfTypes) {
      const system = listOfTypes[id]

      if (system.regex.test(userAgent)) {
        return system.name
      }
    }

    return null
  }

  public getBrowserName(userAgent: string): Maybe<TUserAgentBrowsers> {
    return this.getName(userAgent, this.browserNames)
  }

  public getOperatingSystem(userAgent: string): Maybe<TUserAgentAllPlatforms> {
    return this.getName(userAgent, this.operationSystems)
  }

  public getTypeDevice(userAgent: string): Maybe<TUserAgentDevices> {
    const result = this.getName(userAgent, this.devicesNames)

    if (!result) {
      return null
    }

    return result
  }
}
