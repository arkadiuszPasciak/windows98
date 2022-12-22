import {
  androidPlatformsRegex,
  iOSPlatformsRegex,
  macosPlatforms,
  windowsPlatforms,
} from '@Bundles/NavigatorBundle/Configs/Navigator.configs'
import { EOperatingSystems } from '@Bundles/NavigatorBundle/Supports/Navigator.supports'
import { Nullable } from 'vitest'

export function checkPlatformUserAgent(
  window: Window,
  platforms: Array<RegExp>,
) {
  const checkPlatform = platforms.find((platform: RegExp) => {
    return platform.test(window.navigator.userAgent)
  })

  return checkPlatform ?? null
}

export function getOperatingSystem(window: Window): Nullable<string> {
  const platform =
    window.navigator.userAgent.platform || window.navigator.platform

  if (checkPlatformUserAgent(window, iOSPlatformsRegex)) {
    return EOperatingSystems.IOS
  } else if (checkPlatformUserAgent(window, androidPlatformsRegex)) {
    return EOperatingSystems.ANDROID
  } else if (macosPlatforms.includes(platform)) {
    return EOperatingSystems.MAC_OS
  } else if (windowsPlatforms.includes(platform)) {
    return EOperatingSystems.WINDOWS
  } else if (/Linux/.test(platform)) {
    return EOperatingSystems.LINUX
  }

  return null
}
