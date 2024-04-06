export type TOperationSystemLinux =
  | "Linux x86_64"
  | "Linux armv7l"
  | "Linux armv8l"

export type TOperationSystemMacOS = "Mac OS X" | "Mac OS"

export type TOperationSystemMobile = "Android" | "iOS"

export type TOperationSystemUnix =
  | "Open BSD"
  | "Sun OS"
  | "Linux"
  | "QNX"
  | "UNIX"
  | "BeOS"
  | "OS/2"

export type TOperationSystemWindows =
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

export type TOperationSystemAll =
  | TOperationSystemLinux
  | TOperationSystemMacOS
  | TOperationSystemMobile
  | TOperationSystemUnix
  | TOperationSystemWindows

export interface IOperationSystemRegex {
  name: TOperationSystemAll
  regex: RegExp
}
