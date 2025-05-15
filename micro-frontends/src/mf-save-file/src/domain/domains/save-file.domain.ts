import { MSFileManager } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { SaveFileDomainContract } from "../contracts"

export class SaveFileDomain<FileTypes extends string>
	implements SaveFileDomainContract<FileTypes>
{
	private fileManagerDomain: typeof MSFileManager
	public content: Maybe<string> = null
	public fileName: Maybe<string> = null
	public fileType: Maybe<FileTypes> = null

	constructor() {
		makeAutoObservable(this)

		this.fileManagerDomain = MSFileManager
	}

	public async saveFile(): Promise<void> {
		if (!this.content || !this.fileName || !this.fileType) return

		await this.fileManagerDomain.saveFile<FileTypes>(
			this.content,
			this.fileName,
			this.fileType,
		)
	}

	public setContent(content: string): void {
		this.content = content
	}

	public setFileName(fileName: string): void {
		this.fileName = fileName
	}

	public setFileType(fileType: FileTypes): void {
		this.fileType = fileType
	}
}

export const saveFileDomain = new SaveFileDomain()
