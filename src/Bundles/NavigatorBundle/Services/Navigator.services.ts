import {
  operationSystems,
  mobileOperationsRegex,
  browsers,
} from '@Bundles/NavigatorBundle/Configs/Navigator.configs'
import {
  IPlatform,
  TAllPlatforms,
  TDevices,
  TBrowsers,
  IBrowser,
} from '@Bundles/NavigatorBundle/Supports/Navigator.supports'
import { Nullable } from 'vitest'

export function getOperatingSystem(userAgent: string): Nullable<TAllPlatforms> {
  if (!userAgent || !operationSystems) {
    return null
  }

  for (const id in operationSystems) {
    const system = operationSystems[id] as IPlatform

    if (system.regex.test(userAgent)) {
      return system.name
    }
  }

  return null
}

export function getBrowserName(userAgent: string): Nullable<TBrowsers> {
  if (!userAgent || !browsers) {
    return null
  }

  for (const id in browsers) {
    const system = browsers[id] as IBrowser

    if (system.regex.test(userAgent)) {
      return system.name
    }
  }

  return null
}

export function getTypeDevice(userAgent: string): Nullable<TDevices> {
  if (!userAgent || !mobileOperationsRegex) {
    return null
  }

  const isMobile = mobileOperationsRegex.test(userAgent.toLowerCase())

  return isMobile ? 'mobile' : 'desktop'
}
