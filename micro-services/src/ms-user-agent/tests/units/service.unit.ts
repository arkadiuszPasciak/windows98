import { expect, it, describe, vi } from "vitest"
import UserAgentService from "../../src/domain/services/user-agent.service"

export const MUserAgentMocks = {
	chromeMacOSXDesktop:
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
	safariIOSMobile:
		"Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
	firefoxAndroidDesktop:
		"Mozilla/5.0 (Android 13; Mobile; rv:68.0) Gecko/68.0 Firefox/108.0",
	edgeWindowsDesktop:
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
	operaLinuxDesktop:
		"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/96.0.4640.0",
}

export const MUserAgentBrowserNames = [
	{
		userAgent: MUserAgentMocks.chromeMacOSXDesktop,
		expected: "Chrome",
	},
	{
		userAgent: MUserAgentMocks.firefoxAndroidDesktop,
		expected: "Firefox",
	},
	{
		userAgent: MUserAgentMocks.safariIOSMobile,
		expected: "Safari",
	},
]

export const MUserAgentDeviceTypes = [
	{
		userAgent: MUserAgentMocks.chromeMacOSXDesktop,
		expected: "desktop",
	},
	{
		userAgent: MUserAgentMocks.safariIOSMobile,
		expected: "mobile",
	},
]

export const MUserAgentOperationSystems = [
	{
		userAgent: MUserAgentMocks.chromeMacOSXDesktop,
		expected: "Mac OS X",
	},
	{
		userAgent: MUserAgentMocks.safariIOSMobile,
		expected: "iOS",
	},
	{
		userAgent: MUserAgentMocks.edgeWindowsDesktop,
		expected: "Windows NT 4.0",
	},
	{
		userAgent: MUserAgentMocks.operaLinuxDesktop,
		expected: "Linux",
	},
]

describe("[MicroServices]<UserAgent>(UserAgentService)", () => {
	it.each(MUserAgentBrowserNames)("should return browser name", (browser) => {
		vi.stubGlobal("navigator", {
			userAgent: browser.userAgent,
		})

		const userAgentService = new UserAgentService()
		const browserName = userAgentService.getBrowserName()

		expect(browserName).equal(browser.expected)

		vi.restoreAllMocks()
	})

	it.each(MUserAgentDeviceTypes)("should return device type", (device) => {
		vi.stubGlobal("navigator", {
			userAgent: device.userAgent,
		})

		const userAgentService = new UserAgentService()
		const deviceType = userAgentService.getTypeDevice()

		expect(deviceType).equal(device.expected)

		vi.restoreAllMocks()
	})

	it.each(MUserAgentOperationSystems)(
		"should return operation system",
		(operationSystem) => {
			vi.stubGlobal("navigator", {
				userAgent: operationSystem.userAgent,
			})

			const userAgentService = new UserAgentService()
			const operationSystemName = userAgentService.getOperatingSystem()

			expect(operationSystemName).equal(operationSystem.expected)

			vi.restoreAllMocks()
		},
	)
})
