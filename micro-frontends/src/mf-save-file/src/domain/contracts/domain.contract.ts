import type { MSFileManagerTextTypes } from "@windows98/micro-services"

export interface SaveFileDomainContract {
	content: string
	fileName: string
	fileType: MSFileManagerTextTypes

	saveFile(): Promise<void>
	setContent(content: string): void
	setFileName(fileName: string): void
	setFileType(fileType: MSFileManagerTextTypes): void
}
