import type BrowserEnvServiceContract from '../contracts/service.contract'
import BrowserNameRepository from "../../data/repositories/browser-name.repository"
import DeviceTypeRepository from '../../data/repositories/device-type.repository'
import OperationSystemRepository from '../../data/repositories/operation-system.repository'
import ScreenRepository from '../../data/repositories/screen.repository'

export default class BrowserEnvService implements BrowserEnvServiceContract {
	constructor(
		private readonly browserNameRepository = new BrowserNameRepository(),
		private readonly deviceTypeRepository = new DeviceTypeRepository(),
		private readonly operationSystemRepository = new OperationSystemRepository(),
		private readonly screenRepository = new ScreenRepository(),
	) { }

	public getBrowserName() {
		return this.browserNameRepository.get()
	}

	public getDeviceType() {
		return this.deviceTypeRepository.get()
	}

	public getOperationSystem() {
		return this.operationSystemRepository.get()
	}

	public getScreenInformation() {
		return this.screenRepository.get()
	}
}
