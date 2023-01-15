import {
  operationSystems,
  devicesNames,
  browserNames,
} from '@Bundles/NavigatorBundle/Configs/Navigator.configs'
import {
  IPlatform,
  IDevices,
  IBrowser,
  TBrowsers,
  TAllPlatforms,
  TDevices,
} from '@Bundles/NavigatorBundle/Supports/Navigator.supports'
import { Nullable } from 'vitest'

class UserAgent {
  readonly browserNames: Array<IBrowser>
  readonly devicesNames: Array<IDevices>
  readonly operationSystems: Array<IPlatform>

  constructor(
    browserNames: Array<IBrowser>,
    devicesNames: Array<IDevices>,
    operationSystems: Array<IPlatform>,
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

  public getBrowserName(userAgent: string): Nullable<TBrowsers> {
    return this.getName(userAgent, this.browserNames)
  }

  public getOperatingSystem(userAgent: string): Nullable<TAllPlatforms> {
    return this.getName(userAgent, this.operationSystems)
  }

  public getTypeDevice(userAgent: string): Nullable<TDevices> {
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

export function getBrowserName(userAgent: string): Nullable<TBrowsers> {
  if (!userAgent) {
    return null
  }

  return userAgentObject.getBrowserName(userAgent)
}

export function getOperatingSystem(userAgent: string): Nullable<TAllPlatforms> {
  if (!userAgent) {
    return null
  }

  return userAgentObject.getOperatingSystem(userAgent)
}

export function getTypeDevice(userAgent: string): Nullable<TDevices> {
  if (!userAgent) {
    return null
  }

  return userAgentObject.getTypeDevice(userAgent)
}
