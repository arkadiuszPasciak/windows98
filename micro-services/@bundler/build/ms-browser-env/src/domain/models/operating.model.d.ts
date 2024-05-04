export type TOperatingSystemLinux = "Linux x86_64" | "Linux armv7l" | "Linux armv8l";
export type TOperatingSystemMacOS = "Mac OS X" | "Mac OS";
export type TOperatingSystemMobile = "Android" | "iOS";
export type TOperatingSystemUnix = "Open BSD" | "Sun OS" | "Linux" | "QNX" | "UNIX" | "BeOS" | "OS/2";
export type TOperatingSystemWindows = "Windows 3.11" | "Windows 95" | "Windows ME" | "Windows 98" | "Windows CE" | "Windows 2000" | "Windows XP" | "Windows Server 2003" | "Windows Vista" | "Windows 7" | "Windows 8.1" | "Windows 8" | "Windows NT 4.0" | "Windows ME";
export type TOperatingSystemAll = TOperatingSystemLinux | TOperatingSystemMacOS | TOperatingSystemMobile | TOperatingSystemUnix | TOperatingSystemWindows;
export interface IOperatingSystemRegex {
    name: TOperatingSystemAll;
    regex: RegExp;
}
