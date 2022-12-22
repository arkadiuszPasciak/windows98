import {
  TAndroidPlatforms,
  TIOSPlatforms,
  TMacOSPlatforms,
  TWindowsPlatforms,
} from '@Bundles/NavigatorBundle/Supports/Navigator.supports'

export const androidPlatforms = ['Android'] as Array<TAndroidPlatforms>
export const androidPlatformsRegex = [/Android/] as Array<RegExp>

export const iOSPlatforms = ['iPhone', 'iPad', 'iPod'] as Array<TIOSPlatforms>
export const iOSPlatformsRegex = [/iPhone/, /iPad/, /iPod/] as Array<RegExp>

export const macosPlatforms = [
  'Macintosh',
  'MacIntel',
  'MacPPC',
  'Mac68K',
  'macOS',
] as Array<TMacOSPlatforms>

export const windowsPlatforms = [
  'Win32',
  'Win64',
  'Windows',
  'WinCE',
] as Array<TWindowsPlatforms>
