import {
  operationSystems,
  mobileOperationsRegex,
} from '@Bundles/NavigatorBundle/Configs/Navigator.configs'
import {
  IPlatform,
  TAllPlatforms,
  TDevices,
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

export function checkTypeDevice(window: Window): Nullable<TDevices> {
  if (!window || !mobileOperationsRegex) {
    return null
  }

  const isMobile = mobileOperationsRegex.test(
    window.navigator.userAgent.toLowerCase(),
  )

  return isMobile ? 'mobile' : 'desktop'
}
