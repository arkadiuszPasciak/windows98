export type TLinuxPlatforms = 'Linux x86_64' | 'Linux armv7l' | 'Linux armv8l'

export type TMacOSPlatforms = 'Mac OS X' | 'Mac OS'

export type TMobilePlatforms = 'Android' | 'iOS'

export type TUnixPlatforms =
  | 'Open BSD'
  | 'Sun OS'
  | 'Linux'
  | 'QNX'
  | 'UNIX'
  | 'BeOS'
  | 'OS/2'

export type TWindowsPlatforms =
  | 'Windows 3.11'
  | 'Windows 95'
  | 'Windows ME'
  | 'Windows 98'
  | 'Windows CE'
  | 'Windows 2000'
  | 'Windows XP'
  | 'Windows Server 2003'
  | 'Windows Vista'
  | 'Windows 7'
  | 'Windows 8.1'
  | 'Windows 8'
  | 'Windows NT 4.0'
  | 'Windows ME'

export type TAllPlatforms =
  | TLinuxPlatforms
  | TMacOSPlatforms
  | TMobilePlatforms
  | TUnixPlatforms
  | TWindowsPlatforms

export type TDevices = 'mobile' | 'desktop'

export interface IPlatform {
  name: TAllPlatforms
  regex: RegExp
}
