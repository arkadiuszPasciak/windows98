import type { Maybe } from "@windows98/toolkit/src/types"
import type { TBrowserName } from "../models/browser.model"
import type { TDevices } from '../models/device.model'
import type { TOperationSystemAll } from '../models/operation.model'
import type BrowserEnvServiceContract from '../contracts/service.contract'
import BrowserNameRepository from "../../data/repositories/browser-name.repository"
import DeviceTypeRepository from '../../data/repositories/device-type.repository'
import OperationSystemRepository from '../../data/repositories/operation-system.repository'

// TODO - add contract
export default class BrowserEnvService implements BrowserEnvServiceContract {
	constructor(
		private readonly browserNameRepository = new BrowserNameRepository(),
		private readonly deviceTypeRepository = new DeviceTypeRepository(),
		private readonly operationSystemRepository = new OperationSystemRepository(),
	) { }

	public getBrowserName(): Maybe<TBrowserName> {
		return this.browserNameRepository.getName()
	}

	public getDeviceType(): Maybe<TDevices> {
		return this.deviceTypeRepository.getName()
	}

	public getOperationSystem(): Maybe<TOperationSystemAll> {
		return this.operationSystemRepository.getName()
	}
}
