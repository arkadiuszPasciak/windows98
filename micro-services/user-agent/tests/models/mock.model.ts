import type { MUserAgentMocks } from '../mocks/user-agent.mock'
import type { TUserAgentBrowsers } from '../../src/domain/models/browser.model'
import type { TUserAgentDevices } from '../../src/domain/models/device.model'
import type { TUserAgentAllPlatforms } from '../../src/domain/models/platform.model'

export interface IUserAgentMocks {
  chromeMacOSXDesktop: string
  safariIOSMobile: string
  firefoxAndroidDesktop: string
  edgeWindowsDesktop: string
  operaLinuxDesktop: string
}

export interface IUserAgentTestMocks<T> {
  userAgent: (typeof MUserAgentMocks)[keyof typeof MUserAgentMocks]
  expected: T
}

export type IUserAgentBrowserNames = Array<
  IUserAgentTestMocks<TUserAgentBrowsers>
>

export type IUserAgentDeviceTypes = Array<
  IUserAgentTestMocks<TUserAgentDevices>
>

export type IUserAgentOperationSystems = Array<
  IUserAgentTestMocks<TUserAgentAllPlatforms>
>
