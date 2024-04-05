import type { Maybe } from "@windows98/toolkit/src/types"
import type { TBrowserName } from "../models/browser.model"
import BrowserNameRepository from "../../data/repositories/browser-name.repository"

export default class BrowserEnvService {
	constructor(
		private readonly browserNameRepository = new BrowserNameRepository(),
	) { }

	public getBrowserName(): Maybe<TBrowserName> {
		return this.browserNameRepository.getName()
	}
}
