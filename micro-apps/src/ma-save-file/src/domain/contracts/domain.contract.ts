export interface SaveFileDomainContract {
	content: string
	fileName: string
	fileType: string

	saveFile(): Promise<void>
	setContent(content: string): void
	setFileName(fileName: string): void
	setFileType(fileType: string): void
}
