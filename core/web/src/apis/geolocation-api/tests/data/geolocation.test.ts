import { describe, expect, it, vi } from "vitest"
import { geolocationAPIMock } from "../../../../../@test/vitest/mocks"
import { GeolocationAPIRepository } from "../../src/data/repositories"

describe("GeolocationAPIRepository", () => {
	const geolocationRepository = new GeolocationAPIRepository()

	it("should call success callback on getCurrentPosition", () => {
		const success = vi.fn()
		const error = vi.fn()
		geolocationAPIMock.implementMock(geolocationAPIMock.createMock("success"))
		geolocationRepository.getCurrentPosition(success, error)
		expect(success).toHaveBeenCalled()
		expect(error).not.toHaveBeenCalled()
	})

	it("should call error callback on getCurrentPosition", () => {
		const success = vi.fn()
		const error = vi.fn()
		geolocationAPIMock.implementMock(geolocationAPIMock.createMock("error"))
		geolocationRepository.getCurrentPosition(success, error)
		expect(success).not.toHaveBeenCalled()
		expect(error).toHaveBeenCalled()
	})

	it("should call success callback on watchPosition and return watchId", () => {
		const success = vi.fn()
		const error = vi.fn()
		geolocationAPIMock.implementMock(geolocationAPIMock.createMock("success"))
		const watchId = geolocationRepository.watchPosition(success, error)
		expect(success).toHaveBeenCalled()
		expect(error).not.toHaveBeenCalled()
		expect(watchId).toBe(1)
	})

	it("should call error callback on watchPosition and return watchId", () => {
		const success = vi.fn()
		const error = vi.fn()
		geolocationAPIMock.implementMock(geolocationAPIMock.createMock("error"))
		const watchId = geolocationRepository.watchPosition(success, error)
		expect(success).not.toHaveBeenCalled()
		expect(error).toHaveBeenCalled()
		expect(watchId).toBe(1)
	})

	it("should call clearWatch", () => {
		const mock = geolocationAPIMock.createMock("success")
		geolocationAPIMock.implementMock(mock)
		geolocationRepository.clearWatch(123)
		expect(mock.clearWatch).toHaveBeenCalledWith(123)
	})
})
