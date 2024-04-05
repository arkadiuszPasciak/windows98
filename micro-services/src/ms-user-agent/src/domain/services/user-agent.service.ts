import UserAgentRepository from "../../data/repositories/user-agent.repository"
import type { Maybe } from "@windows98/toolkit/src/types"
import type UserAgentServiceContract from "../contracts/service.contract"
import type { TUserAgentDevices } from "../models/device.model"
import type { TUserAgentBrowsers } from "../models/browser.model"
import type { TUserAgentAllPlatforms } from "../models/platform.model"

export default class UserAgentService implements UserAgentServiceContract {
	constructor(
		private readonly userAgentRepository = new UserAgentRepository(),
	) { }

	public getBrowserName(): Maybe<TUserAgentBrowsers> {
		return this.userAgentRepository.getBrowserName()
	}

	public getOperatingSystem(): Maybe<TUserAgentAllPlatforms> {
		return this.userAgentRepository.getOperatingSystem()
	}

	public getTypeDevice(): Maybe<TUserAgentDevices> {
		return this.userAgentRepository.getTypeDevice()
	}
}
