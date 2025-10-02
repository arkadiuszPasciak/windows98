import { locationAPIMock } from "@windows98/web/mocks"
import { beforeAll, describe, expect, it } from "vitest"
import { AppControllerDomain } from "../../src/domain/domains"

describe("AppControllerDomain", () => {
	const testData = {
		href: "https://google.com",
	}
	const appControllerDomain = new AppControllerDomain(testData.href)
	const locationMock = locationAPIMock.createMock()

	beforeAll(() => {
		locationAPIMock.implementMock(locationMock)
	})

	it("restartApplication should reload the browser", () => {
		appControllerDomain.restartApplication()

		expect(window.location.reload).toHaveBeenCalled()
	})

	it("turnOffApplication should redirect outside of the app", () => {
		appControllerDomain.shutdownApplication()

		expect(window.location.href).toBe(testData.href)
	})
})
