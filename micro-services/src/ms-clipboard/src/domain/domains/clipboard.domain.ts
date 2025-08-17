import { ClipboardRepository } from "../../data/repositories"
import type {
	ClipboardAPIRepositoryContract,
	ClipboardDomainContract,
} from "../contracts"

class ClipboardDomain implements ClipboardDomainContract {
	private readonly repository: ClipboardAPIRepositoryContract

	constructor(repository: ClipboardAPIRepositoryContract) {
		this.repository = repository
	}

	async copyText(text: string): Promise<void> {
		await this.repository.writeText(text)
	}

	async pasteText(): Promise<string> {
		return this.repository.readText()
	}
}

export const MSClipboard = new ClipboardDomain(new ClipboardRepository())
