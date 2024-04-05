import { MSUserAgent } from "@windows98/micro-services/@bundler/src/main"

export default function useSettingsGeneral() {
	const userAgentMicroServices = new MSUserAgent()

	const browserName = userAgentMicroServices.getBrowserName()
	const deviceType = userAgentMicroServices.getTypeDevice()
	const operatingSystem = userAgentMicroServices.getOperatingSystem()

	return {
		browserName,
		deviceType,
		operatingSystem,
	}
}
