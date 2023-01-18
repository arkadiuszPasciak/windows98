import {
  operationSystems,
  devicesNames,
  browserNames,
} from '@Bundles/UserAgentBundle/Configs/UserAgent.configs'
import {
  IUserAgentPlatform,
  IUserAgentDevices,
  IUserAgentBrowser,
  TUserAgentBrowsers,
  TUserAgentAllPlatforms,
  TUserAgentDevices,
} from '@Bundles/UserAgentBundle/Supports/UserAgent.supports'
import { Nullable } from 'vitest'

class UserAgent {
  readonly browserNames: Array<IUserAgentBrowser>
  readonly devicesNames: Array<IUserAgentDevices>
  readonly operationSystems: Array<IUserAgentPlatform>

  constructor(
    browserNames: Array<IUserAgentBrowser>,
    devicesNames: Array<IUserAgentDevices>,
    operationSystems: Array<IUserAgentPlatform>,
  ) {
    this.browserNames = browserNames
    this.devicesNames = devicesNames
    this.operationSystems = operationSystems
  }

  private getName<ArrayType extends { regex: RegExp; name: string }>(
    userAgent: string,
    listOfTypes: Array<ArrayType>,
  ): Nullable<ArrayType['name']> {
    for (const id in listOfTypes) {
      const system = listOfTypes[id]

      if (system.regex.test(userAgent)) {
        return system.name
      }
    }

    return null
  }

  public getBrowserName(userAgent: string): Nullable<TUserAgentBrowsers> {
    return this.getName(userAgent, this.browserNames)
  }

  public getOperatingSystem(
    userAgent: string,
  ): Nullable<TUserAgentAllPlatforms> {
    return this.getName(userAgent, this.operationSystems)
  }

  public getTypeDevice(userAgent: string): Nullable<TUserAgentDevices> {
    const result = this.getName(userAgent, this.devicesNames)

    if (!result) {
      return null
    }

    return result
  }
}

const userAgentObject = new UserAgent(
  browserNames,
  devicesNames,
  operationSystems,
)

export function getBrowserName(
  userAgent: string,
): Nullable<TUserAgentBrowsers> {
  if (!userAgent) {
    return null
  }

  return userAgentObject.getBrowserName(userAgent)
}

export function getOperatingSystem(
  userAgent: string,
): Nullable<TUserAgentAllPlatforms> {
  if (!userAgent) {
    return null
  }

  return userAgentObject.getOperatingSystem(userAgent)
}

export function getTypeDevice(userAgent: string): Nullable<TUserAgentDevices> {
  if (!userAgent) {
    return null
  }

  return userAgentObject.getTypeDevice(userAgent)
}
