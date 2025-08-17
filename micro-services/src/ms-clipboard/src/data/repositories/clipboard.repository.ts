import type { ClipboardAPIRepositoryContract } from "../../domain/contracts"

export class ClipboardRepository implements ClipboardAPIRepositoryContract {
	async writeText(text: string): Promise<void> {
		await window.navigator.clipboard.writeText(text)
	}

	async readText(): Promise<string> {
		return window.navigator.clipboard.readText()
	}
}
