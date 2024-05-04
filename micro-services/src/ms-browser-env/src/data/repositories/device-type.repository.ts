import type BrowserEnvRepositoryContract from "../../domain/contracts/repository.contract"
import { IDevicesRegex, TDevices } from "../../domain/models/device.model"

export default class DeviceTypeRepository implements BrowserEnvRepositoryContract<TDevices> {
	constructor(
		private readonly devicesNames: Array<IDevicesRegex> = [
			{
				name: "mobile",
				regex: /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
			},
			{
				name: "desktop",
				regex: /Win|Windows|OpenBSD|SunOS|Linux|X11|Mac|Mac OS X/i,
			},
		]
	) { }

	public get() {
		const userAgent = window.navigator.userAgent

		if (!userAgent) return null

		for (const id in this.devicesNames) {
			const system = this.devicesNames[id]

			if (system.regex.test(userAgent)) {
				return system.name
			}
		}

		return null
	}
}
