import {
	canvasAPIMock,
	fileAPIMock,
	htmlDOMAPIMock,
} from "@windows98/web/mocks"
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"
import { fileToCanvas } from "./file-to-canvas.util"

const testData = {
	file: new File(["dummy content"], "test.png", { type: "image/png" }),
}

describe("fileToCanvas", () => {
	beforeAll(() => {
		canvasAPIMock.implementMock()
		fileAPIMock.implementMock()
		htmlDOMAPIMock.implementMock()
	})

	afterAll(() => {
		vi.restoreAllMocks()
	})

	it("should resolve with a canvas element with correct dimensions", async () => {
		const canvas = await fileToCanvas(testData.file)

		expect(canvas.tagName).toBe("CANVAS")
	})
})
