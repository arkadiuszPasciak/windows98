import { MSBrowserEnv } from "@windows98/micro-services/@bundler/src/main"

export default function useSettingsGeneral() {
	const msBrowserEnv = new MSBrowserEnv()

	const browserName = msBrowserEnv.getBrowserName()
	const deviceType = msBrowserEnv.getDeviceType()
	const operatingSystem = msBrowserEnv.getOperationSystem()

	return {
		browserName,
		deviceType,
		operatingSystem,
	}
}
