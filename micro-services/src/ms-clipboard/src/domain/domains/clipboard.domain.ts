import { ClipBoardAPI } from "@windows98/web"
import type { ClipboardDomainContract } from "../contracts"

class ClipboardDomain implements ClipboardDomainContract {
	private readonly clipboardRepository: ClipBoardAPI

	constructor() {
		this.clipboardRepository = new ClipBoardAPI()
	}

	async copyText(text: string): Promise<void> {
		await this.clipboardRepository.writeText(text)
	}

	async pasteText(): Promise<string> {
		return this.clipboardRepository.readText()
	}
}

export const MSClipboard = new ClipboardDomain()
