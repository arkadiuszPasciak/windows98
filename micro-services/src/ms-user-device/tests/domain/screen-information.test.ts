import { fullscreenAPIMock, screenAPIMock } from "@windows98/web/mocks"
import { afterEach, describe, expect, it, suite, vi } from "vitest"
import { UserDeviceDomain } from "../../src/domain/domains"

describe("UserDeviceDomain", () => {
	afterEach(() => {
		vi.resetAllMocks()
	})

	suite("getScreenInformation", () => {
		it("should return null when is not available", () => {
			const domain = new UserDeviceDomain()

			const screenInformation = domain.getScreenInformation()
			expect(screenInformation).toBeNull()
		})

		it("should return screen information when available", () => {
			const domain = new UserDeviceDomain()
			const mockData = {
				angleInDegrees: 0,
				heightInPx: 1080,
				isFullscreen: true,
				orientationType: "landscape-primary",
				widthInPx: 1920,
			}

			const createdMockFullscreen = fullscreenAPIMock.createMock(
				mockData.isFullscreen,
			)
			const createdMockScreen = screenAPIMock.createMock(
				mockData.heightInPx,
				mockData.widthInPx,
			)

			fullscreenAPIMock.implementMock(createdMockFullscreen)
			screenAPIMock.implementMock(createdMockScreen)

			const screenInformation = domain.getScreenInformation()
			expect(screenInformation).toEqual(mockData)
		})
	})
})
