import type { FileOperationStrategyContract } from "../../contracts"

export class FileOperationStrategy implements FileOperationStrategyContract {
	public async saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void> {
		const blob = new Blob([content], { type })
		const link = document.createElement("a")
		link.href = URL.createObjectURL(blob)
		link.download = filename

		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}
}
