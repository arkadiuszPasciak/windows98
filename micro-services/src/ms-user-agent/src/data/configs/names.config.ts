import type { IUserAgentBrowser } from "../../domain/models/browser.model"
import type { IUserAgentDevices } from "../../domain/models/device.model"
import type { IUserAgentPlatform } from "../../domain/models/platform.model"

export default class UserAgentNames {
	static devicesNames: Array<IUserAgentDevices> = [
		{
			name: "mobile",
			regex: /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
		},
		{
			name: "desktop",
			regex: /Win|Windows|OpenBSD|SunOS|Linux|X11|Mac|Mac OS X/i,
		},
	]
}
