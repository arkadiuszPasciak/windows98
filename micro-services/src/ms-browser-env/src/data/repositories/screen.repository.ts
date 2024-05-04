import type BrowserEnvRepositoryContract from "../../domain/contracts/repository.contract"
import type { IScreenInformation } from "../../domain/models/screen.model"

export default class ScreenRepository implements BrowserEnvRepositoryContract<IScreenInformation> {
	public get() {
		const windowScreen = window.screen

		if (!windowScreen) return null

		return {
			colorDepth: windowScreen.colorDepth,
			height: windowScreen.height,
			width: windowScreen.width
		}
	}
}
