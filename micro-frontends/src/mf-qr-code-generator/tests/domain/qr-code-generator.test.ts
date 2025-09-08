import { describe, expect, it } from "vitest"
import { QRCodeGeneratorDomain } from "../../src/domain/domains/qr-code-generator.domain"

describe("QRCodeGeneratorDomain", () => {
	const domain: QRCodeGeneratorDomain = new QRCodeGeneratorDomain()

	it("should set content", () => {
		domain.setContent("test-content")
		expect(domain.content).toBe("test-content")
	})

	it("should set format", () => {
		domain.setFormat("png")
		expect(domain.format).toBe("png")
	})

	it("should set size", () => {
		domain.setSize("300x300")
		expect(domain.size).toBe("300x300")
	})

	it("should set type", () => {
		domain.setType("email")
		expect(domain.type).toBe("email")
	})

	// generateQRCode scenario is tested in the microservice MSQRCode
})
