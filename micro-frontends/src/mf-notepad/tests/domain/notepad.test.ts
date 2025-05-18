import { describe, expect, it } from "vitest"
import { NotepadDomain } from "../../src/domain/domains"

describe("NotepadDomain", () => {
	it("should update text correctly", () => {
		const notepadDomain = new NotepadDomain()
		const newText = "Hello, world!"

		notepadDomain.setText(newText)

		expect(notepadDomain.text).toBe(newText)
	})

	it("should have an empty text field by default", () => {
		const notepadDomain = new NotepadDomain()

		expect(notepadDomain.text).toBe("")
	})
})
