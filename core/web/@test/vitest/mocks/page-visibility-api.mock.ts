import { vi } from "vitest"

class PageVisibilityAPIMock {
	public createMock() {
		return {
			visibilityState: "visible",
			hidden: false,
		}
	}

	public implementMock() {
		const { visibilityState, hidden } = this.createMock()
		vi.stubGlobal("pageVisibility", { visibilityState, hidden })
	}

	public reset() {
		vi.restoreAllMocks()
	}
}

export const pageVisibilityAPIMock = new PageVisibilityAPIMock()
