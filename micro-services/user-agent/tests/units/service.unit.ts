import { expect, it, describe, vi } from "vitest"
import UserAgentService from "../../src/domain/services/user-agent.service"
import {
	MUserAgentBrowserNames,
	MUserAgentDeviceTypes,
	MUserAgentOperationSystems,
} from "../mocks/user-agent.mock"

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
