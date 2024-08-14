import BrowserNameRepository from "../../data/repositories/browser-name.repository"
import DeviceTypeRepository from "../../data/repositories/device-type.repository"
import OperatingSystemRepository from "../../data/repositories/operating-system.repository"
import ScreenRepository from "../../data/repositories/screen.repository"
import type BrowserEnvServiceContract from "../contracts/service.contract"

export default class BrowserEnvService implements BrowserEnvServiceContract {
	constructor(
		private readonly browserNameRepository = new BrowserNameRepository(),
		private readonly deviceTypeRepository = new DeviceTypeRepository(),
		private readonly operatingSystemRepository = new OperatingSystemRepository(),
		private readonly screenRepository = new ScreenRepository(),
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

	public getScreenInformation() {
		return this.screenRepository.get()
	}
}
