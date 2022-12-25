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

export function getOperatingSystem(window: Window): Nullable<TAllPlatforms> {
  const userAgent = window.navigator.userAgent ?? null

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

export function getBrowserName(window: Window): Nullable<TBrowsers> {
  const userAgent = window.navigator.userAgent ?? null

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

export function getTypeDevice(window: Window): Nullable<TDevices> {
  if (!window || !mobileOperationsRegex) {
    return null
  }

  const isMobile = mobileOperationsRegex.test(
    window.navigator.userAgent.toLowerCase(),
  )

  return isMobile ? 'mobile' : 'desktop'
}
