export enum EOperatingSystems {
  IOS = 'iOS',
  ANDROID = 'Android',
  MAC_OS = 'Mac OS',
  WINDOWS = 'Windows',
  LINUX = 'Linux',
}

export enum EMobileOperatingSystems {
  IOS = EOperatingSystems.IOS,
  ANDROID = EOperatingSystems.ANDROID,
}

export enum EDesktopOperatingSystems {
  MAC_OS = EOperatingSystems.MAC_OS,
  WINDOWS = EOperatingSystems.WINDOWS,
  LINUX = EOperatingSystems.LINUX,
}

export type TAndroidPlatforms = 'Android'

export type TIOSPlatforms = 'iPhone' | 'iPad' | 'iPod'

export type TMacOSPlatforms =
  | 'Macintosh'
  | 'MacIntel'
  | 'MacPPC'
  | 'Mac68K'
  | 'macOS'

export type TWindowsPlatforms = 'Win32' | 'Win64' | 'Windows' | 'WinCE'

export type TAllPlatforms =
  | TAndroidPlatforms
  | TIOSPlatforms
  | TMacOSPlatforms
  | TWindowsPlatforms
