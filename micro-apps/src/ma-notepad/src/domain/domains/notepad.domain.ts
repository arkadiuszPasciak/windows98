import { MSFileManager } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { NotepadDomainContract } from "../contracts"
import type { ENotepadText } from "../models"

export class NotepadDomain implements NotepadDomainContract {
	private fileManagerDomain: typeof MSFileManager
	public text = ""

	constructor() {
		makeAutoObservable(this)

		this.fileManagerDomain = MSFileManager
	}

	public async openFile(): Promise<void> {
		const result = await this.fileManagerDomain.openFile()

		this.text = result
	}

	public async saveFile(
		fileName: string,
		textType: ENotepadText,
	): Promise<void> {
		await this.fileManagerDomain.saveFile<ENotepadText>(
			this.text,
			fileName,
			textType,
		)
	}
}

export const notepadDomain = new NotepadDomain()
