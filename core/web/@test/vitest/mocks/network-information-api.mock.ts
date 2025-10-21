import { vi } from "vitest"

type Listener = (event?: Event) => void

class NetworkInformationAPIMock {
	private listeners: Map<string, Set<Listener>> = new Map()
	private connection = {
		type: "wifi",
		effectiveType: "4g",
		downlink: 10,
		downlinkMax: 20,
		rtt: 50,
		saveData: false,
		addEventListener: (type: string, listener: Listener) => {
			const set = this.listeners.get(type) ?? new Set()
			set.add(listener)
			this.listeners.set(type, set)
		},
		removeEventListener: (type: string, listener: Listener) => {
			const set = this.listeners.get(type)
			set?.delete(listener)
		},
	}

	public implementMock() {
		vi.stubGlobal("navigator", {
			connection: this.connection,
		})
	}

	public triggerChange(updated: Partial<typeof this.connection> = {}) {
		Object.assign(this.connection, updated)

		const set = this.listeners.get("change")
		if (!set) return

		for (const listener of Array.from(set)) {
			try {
				listener(new Event("change"))
			} catch (error) {
				console.error(error)
			}
		}
	}

	public reset() {
		this.listeners.clear()
		vi.restoreAllMocks()
	}
}

export const networkInformationAPIMock = new NetworkInformationAPIMock()
