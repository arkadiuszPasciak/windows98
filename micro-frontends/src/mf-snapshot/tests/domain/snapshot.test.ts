import { MSMediaDevices } from "@windows98/micro-services"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { SnapshotDomain } from "../../src/domain/domains"

describe("SnapshotDomain", () => {
	let domain: SnapshotDomain

	beforeEach(() => {
		domain = new SnapshotDomain()
		vi.restoreAllMocks()
	})

	it("should initialize with null snapshotUrl", () => {
		expect(domain.snapshotUrl).toBeNull()
	})

	it("should set snapshotUrl after getSnapshot", async () => {
		vi.spyOn(MSMediaDevices, "getSnapshot").mockResolvedValue(
			"mock-snapshot-url",
		)
		await domain.getSnapshot(document.createElement("video"))
		expect(domain.snapshotUrl).toBe("mock-snapshot-url")
	})
})
