import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { AppControllerDomain } from "../../src/domain/domains"

describe("AppControllerDomain", () => {
	const appControllerDomain = new AppControllerDomain()

	beforeEach(() => {
		vi.stubGlobal("location", {
			reload: vi.fn(),
			href: "",
		})
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("restartApplication should reload the browser", () => {
		appControllerDomain.restartApplication()

		expect(window.location.reload).toHaveBeenCalled()
	})

	it("turnOffApplication should redirect to 'https://google.com'", () => {
		appControllerDomain.shutdownApplication()

		expect(window.location.href).toBe("https://google.com")
	})
})
