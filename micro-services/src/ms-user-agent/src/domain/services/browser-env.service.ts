import type { Maybe } from "@windows98/toolkit/src/types"
import type { TBrowserName } from "../models/browser.model"
import type { TOperationSystemAll } from '../models/operation.model'
import BrowserNameRepository from "../../data/repositories/browser-name.repository"
import OperationSystemRepository from '../../data/repositories/operation-system.repository'

// TODO - add contract
export default class BrowserEnvService {
	constructor(
		private readonly browserNameRepository = new BrowserNameRepository(),
		private readonly operationSystemRepository = new OperationSystemRepository(),
	) { }

	public getBrowserName(): Maybe<TBrowserName> {
		return this.browserNameRepository.getName()
	}

	public getOperationSystem(): Maybe<TOperationSystemAll> {
		return this.operationSystemRepository.getName()
	}
}
