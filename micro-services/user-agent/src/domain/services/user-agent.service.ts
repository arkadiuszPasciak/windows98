import UserAgentRepository from '../../data/repositories/user-agent.repository'
import type { Maybe } from '@windows98/toolkit/src/types'
import type UserAgentServiceContract from '../contracts/service.contract'
import type { TUserAgentDevices } from '../../domain/models/device.model'
import type { TUserAgentBrowsers } from '../models/browser.model'
import type { TUserAgentAllPlatforms } from '../models/platform.model'

export default class UserAgentService implements UserAgentServiceContract {
  constructor(private readonly userAgentRepository = new UserAgentRepository) {}

  public getBrowserName(userAgent: string): Maybe<TUserAgentBrowsers> {
    return this.userAgentRepository.getBrowserName(userAgent)
  }

  public getOperatingSystem(userAgent: string): Maybe<TUserAgentAllPlatforms> {
    return this.userAgentRepository.getOperatingSystem(userAgent)
  }

  public getTypeDevice(userAgent: string): Maybe<TUserAgentDevices> {
    return this.userAgentRepository.getTypeDevice(userAgent)
  }
}
