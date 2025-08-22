import { beforeEach, describe, expect, it, vi } from "vitest"
import { WebcamDomain } from "../../src/domain/domains/webcam.domain"

vi.mock("@windows98/micro-services", () => ({
	MSMediaDevices: {
		requestCameraStream: vi.fn(() => Promise.resolve("mock-stream")),
	},
}))

describe("WebcamDomain", () => {
	let domain: WebcamDomain

	beforeEach(() => {
		domain = new WebcamDomain()
	})

	it("should initialize with null mediaStream", () => {
		expect(domain.mediaStream).toBeNull()
	})

	it("should set mediaStream after generateMediaStream", async () => {
		await domain.generateMediaStream()
		expect(domain.mediaStream).toBe("mock-stream")
	})
})
