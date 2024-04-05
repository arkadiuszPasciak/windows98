import type { IBrowserName, TBrowserName } from '../../domain/models/browser.model';
import type BrowserEnvRepositoryContract from '../../domain/contracts/repository.contract';

export default class BrowserNameRepository implements BrowserEnvRepositoryContract<TBrowserName> {
	constructor(
		private readonly browserNames: Array<IBrowserName> = [
			{ name: "Chrome", regex: /chrome|chromium|crios/i },
			{ name: "Firefox", regex: /firefox|fxios/i },
			{ name: "Safari", regex: /safari/i },
			{ name: "Opera", regex: /opr\//i },
			{ name: "Edge", regex: /edg/i },
		],
	) { }

	public getName() {
		const userAgent = window.navigator.userAgent

		if (!userAgent) return null

		for (const id in this.browserNames) {
			const system = this.browserNames[id]

			if (system.regex.test(userAgent)) {
				return system.name
			}
		}

		return null
	}
}
