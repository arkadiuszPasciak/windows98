import { MSFileManager } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { NotepadDomainContract } from "../contracts"
import { TextFormats } from "../models"

export class NotepadDomain implements NotepadDomainContract {
	private fileManagerDomain: typeof MSFileManager
	public text = ""
	public readonly textFormats: Array<TextFormats> = Object.values(TextFormats)

	constructor() {
		makeAutoObservable(this)

		this.fileManagerDomain = MSFileManager
	}

	public async openFile(): Promise<void> {
		const result = await this.fileManagerDomain.openFile()
		const text = await result.text()

		this.setText(text)
	}

	public setText(text: string): void {
		this.text = text
	}
}

export const notepadDomain = new NotepadDomain()
