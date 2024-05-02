import { MSBrowserEnv } from "@windows98/micro-services"

export default function useSettingsGeneral() {
	const msBrowserEnv = new MSBrowserEnv()

	const browserName = msBrowserEnv.getBrowserName()
	const deviceType = msBrowserEnv.getDeviceType()
	const operatingSystem = msBrowserEnv.getOperatingSystem()

	return {
		browserName,
		deviceType,
		operatingSystem,
	}
}
