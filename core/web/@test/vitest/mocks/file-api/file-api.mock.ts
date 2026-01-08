import { vi } from "vitest"
import { FileInterfaceMock, FileReaderInterfaceMock } from "./interfaces"

class FileAPIMock {
	public implementMock() {
		vi.stubGlobal("File", FileInterfaceMock)
		vi.stubGlobal("FileReader", FileReaderInterfaceMock)
	}
}

export const fileAPIMock = new FileAPIMock()
