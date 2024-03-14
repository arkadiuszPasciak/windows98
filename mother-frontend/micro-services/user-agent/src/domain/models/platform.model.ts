export type TUserAgentLinuxPlatforms =
  | "Linux x86_64"
  | "Linux armv7l"
  | "Linux armv8l"

export type TUserAgentMacOSPlatforms = "Mac OS X" | "Mac OS"

export type TUserAgentMobilePlatforms = "Android" | "iOS"

export type TUserAgentUnixPlatforms =
  | "Open BSD"
  | "Sun OS"
  | "Linux"
  | "QNX"
  | "UNIX"
  | "BeOS"
  | "OS/2"

export type TUserAgentWindowsPlatforms =
  | "Windows 3.11"
  | "Windows 95"
  | "Windows ME"
  | "Windows 98"
  | "Windows CE"
  | "Windows 2000"
  | "Windows XP"
  | "Windows Server 2003"
  | "Windows Vista"
  | "Windows 7"
  | "Windows 8.1"
  | "Windows 8"
  | "Windows NT 4.0"
  | "Windows ME"

export type TUserAgentAllPlatforms =
  | TUserAgentLinuxPlatforms
  | TUserAgentMacOSPlatforms
  | TUserAgentMobilePlatforms
  | TUserAgentUnixPlatforms
  | TUserAgentWindowsPlatforms

export interface IUserAgentPlatform {
  name: TUserAgentAllPlatforms
  regex: RegExp
}
