import {
  IPlatform,
  IBrowser,
  IDevices,
} from '@Bundles/NavigatorBundle/Supports/Navigator.supports'

export const operationSystems = [
  { name: 'Windows 3.11', regex: /Win16/ },
  { name: 'Windows 95', regex: /(Windows 95|Win95|Windows_95)/ },
  { name: 'Windows ME', regex: /(Win 9x 4.90|Windows ME)/ },
  { name: 'Windows 98', regex: /(Windows 98|Win98)/ },
  { name: 'Windows CE', regex: /Windows CE/ },
  { name: 'Windows 2000', regex: /(Windows NT 5.0|Windows 2000)/ },
  { name: 'Windows XP', regex: /(Windows NT 5.1|Windows XP)/ },
  { name: 'Windows Server 2003', regex: /Windows NT 5.2/ },
  { name: 'Windows Vista', regex: /Windows NT 6.0/ },
  { name: 'Windows 7', regex: /(Windows 7|Windows NT 6.1)/ },
  { name: 'Windows 8.1', regex: /(Windows 8.1|Windows NT 6.3)/ },
  { name: 'Windows 8', regex: /(Windows 8|Windows NT 6.2)/ },
  {
    name: 'Windows NT 4.0',
    regex: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
  },
  { name: 'Windows ME', regex: /Windows ME/ },
  { name: 'Android', regex: /Android/ },
  { name: 'Open BSD', regex: /OpenBSD/ },
  { name: 'Sun OS', regex: /SunOS/ },
  { name: 'Linux', regex: /(Linux|X11)/ },
  { name: 'iOS', regex: /(iPhone|iPad|iPod)/ },
  { name: 'Mac OS X', regex: /Mac OS X/ },
  { name: 'Mac OS', regex: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
  { name: 'QNX', regex: /QNX/ },
  { name: 'UNIX', regex: /UNIX/ },
  { name: 'BeOS', regex: /BeOS/ },
  { name: 'OS/2', regex: /OS\/2/ },
] as Array<IPlatform>

export const browserNames = [
  { name: 'Chrome', regex: /chrome|chromium|crios/i },
  { name: 'Firefox', regex: /firefox|fxios/i },
  { name: 'Safari', regex: /safari/i },
  { name: 'Opera', regex: /opr\//i },
  { name: 'Edge', regex: /edg/i },
] as Array<IBrowser>

export const devicesNames = [
  {
    name: 'mobile',
    regex: /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
  },
  {
    name: 'desktop',
    regex: /Win|Windows|OpenBSD|SunOS|Linux|X11|Mac|Mac OS X/i,
  },
] as Array<IDevices>
