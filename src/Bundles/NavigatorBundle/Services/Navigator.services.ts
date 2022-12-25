import { operationSystems } from '@Bundles/NavigatorBundle/Configs/Navigator.configs'
import {
  IPlatform,
  TAllPlatforms,
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
