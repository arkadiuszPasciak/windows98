export interface FileManagerDomainContract {
	downloadFile(file: File, filename: string): Promise<void>
	openFile(): Promise<File>
	saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void>
}
