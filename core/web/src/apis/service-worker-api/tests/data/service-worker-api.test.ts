import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"
import { serviceWorkerAPIMock } from "../../../../../@test/vitest/mocks/service-worker-api.mock"
import { ServiceWorkerAPIRepository } from "../../src/data/repositories"

describe("ServiceWorkerAPIRepository", () => {
	let serviceWorkerRepository: ServiceWorkerAPIRepository

	beforeAll(() => {
		serviceWorkerAPIMock.implementMock()
	})

	beforeEach(() => {
		serviceWorkerAPIMock.reset()
		serviceWorkerRepository = new ServiceWorkerAPIRepository()
	})

	it("registers a service worker and returns registration model", async () => {
		const result = await serviceWorkerRepository.register("/sw.js", {
			scope: "/app",
		})

		expect(result.scope).toBe("/app")
		expect(result).toHaveProperty("active")
	})

	it("returns null when no registration is found", async () => {
		serviceWorkerAPIMock.setRegistration(null)

		const result = await serviceWorkerRepository.getRegistration()

		expect(result).toBeNull()
	})

	it("returns registration when found", async () => {
		const result = await serviceWorkerRepository.getRegistration()

		expect(result).not.toBeNull()
		expect(result).toHaveProperty("scope")
	})

	it("update returns not-found when no registration", async () => {
		serviceWorkerAPIMock.setRegistration(null)

		const result = await serviceWorkerRepository.update()

		expect(result.state).toBe("not-found")
	})

	it("update returns found and registration when available", async () => {
		const result = await serviceWorkerRepository.update()

		expect(result.state).toBe("found")
		expect(result.registration).toHaveProperty("scope")
	})

	it("unregister returns false when no registration", async () => {
		serviceWorkerAPIMock.setRegistration(null)

		const result = await serviceWorkerRepository.unregister()

		expect(result).toBe(false)
	})

	it("unregister calls registration.unregister when available", async () => {
		const response = await serviceWorkerRepository.unregister()

		expect(response).toBe(true)
	})

	it("adds and removes controllerchange listeners", () => {
		const listener = vi.fn()

		serviceWorkerRepository.onControllerChange(listener)
		expect(window.navigator.serviceWorker.addEventListener).toHaveBeenCalled()

		serviceWorkerRepository.offControllerChange(listener)
		expect(
			window.navigator.serviceWorker.removeEventListener,
		).toHaveBeenCalled()
	})
})
