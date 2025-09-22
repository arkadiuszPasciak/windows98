import type { ClipboardAPIRepositoryContract } from "../contracts"

export class ClipboardRepository implements ClipboardAPIRepositoryContract {
	async writeText(text: string): Promise<void> {
		await window.navigator.clipboard.writeText(text)
	}

	async readText(): Promise<string> {
		return window.navigator.clipboard.readText()
	}
}
