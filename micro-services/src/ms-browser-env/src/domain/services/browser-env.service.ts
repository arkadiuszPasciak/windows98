import { ScreenAPI } from "@windows98/web"
import BrowserNameRepository from "../../data/repositories/browser-name.repository"
import DeviceTypeRepository from "../../data/repositories/device-type.repository"
import OperatingSystemRepository from "../../data/repositories/operating-system.repository"
import type BrowserEnvServiceContract from "../contracts/service.contract"
import type { ScreenInformation } from "../models"

export default class BrowserEnvService implements BrowserEnvServiceContract {
	constructor(
		private readonly browserNameRepository = new BrowserNameRepository(),
		private readonly deviceTypeRepository = new DeviceTypeRepository(),
		private readonly operatingSystemRepository = new OperatingSystemRepository(),
		private readonly screenRepository = new ScreenAPI(),
	) {}

	public getBrowserName() {
		return this.browserNameRepository.get()
	}

	public getDeviceType() {
		return this.deviceTypeRepository.get()
	}

	public getOperatingSystem() {
		return this.operatingSystemRepository.get()
	}

	public getScreenInformation(): ScreenInformation {
		return {
			height: this.screenRepository.getHeight(),
			width: this.screenRepository.getWidth(),
		}
	}
}
