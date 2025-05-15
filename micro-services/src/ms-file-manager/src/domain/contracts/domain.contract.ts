export interface FileManagerDomainContract {
	openFile(): Promise<string>
	saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void>
}
