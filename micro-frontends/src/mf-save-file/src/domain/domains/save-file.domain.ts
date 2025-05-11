import {
	MSFileManager,
	MSFileManagerTextTypes,
} from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { SaveFileDomainContract } from "../contracts"

export class SaveFileDomain implements SaveFileDomainContract {
	private fileManagerDomain: typeof MSFileManager
	public content = ""
	public fileName = ""
	public fileType: MSFileManagerTextTypes = MSFileManagerTextTypes.TXT

	constructor() {
		makeAutoObservable(this)

		this.fileManagerDomain = MSFileManager
	}

	public async saveFile(): Promise<void> {
		await this.fileManagerDomain.saveTextFile(
			this.content,
			this.fileName,
			this.fileType,
		)
	}

	public setContent(content: string) {
		this.content = content
	}

	public setFileName(fileName: string): void {
		this.fileName = fileName
	}

	public setFileType(fileType: MSFileManagerTextTypes): void {
		this.fileType = fileType
	}
}

export const saveFileDomain = new SaveFileDomain()
