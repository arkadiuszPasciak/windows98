import { vi } from "vitest"

interface DeviceMemory {
	deviceMemory: number
}

class DeviceMemoryAPIMock {
	public createMock(memory: number): DeviceMemory {
		return {
			deviceMemory: memory,
		}
	}

	public implementMock(deviceMemoryMock: DeviceMemory) {
		vi.stubGlobal("navigator", deviceMemoryMock)
	}
}

export const deviceMemoryAPIMock = new DeviceMemoryAPIMock()
