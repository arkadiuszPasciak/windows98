import type {
	FileManagerDomainContract,
	FileOperationStrategyContract,
} from "../contracts"
import type { EFileTextTypes } from "../models"
import { FileOperationStrategy } from "./strategies"

export class FileManagerDomain implements FileManagerDomainContract {
	private fileOperationStrategy: FileOperationStrategyContract

	constructor() {
		this.fileOperationStrategy = new FileOperationStrategy()
	}

	public async openFile(): Promise<string> {
		return new Promise((resolve, reject) => {
			const input = document.createElement("input")
			input.type = "file"

			input.onchange = async (event: Event) => {
				const target = event.target as HTMLInputElement
				if (!target.files || target.files.length === 0) {
					reject(new Error("No file selected"))
					return
				}

				const file = target.files[0]
				const contents = await file.text()
				resolve(contents)
			}

			input.click()
		})
	}

	public async saveTextFile(
		content: string,
		filename: string,
		type: EFileTextTypes,
	): Promise<void> {
		this.fileOperationStrategy.saveFile<EFileTextTypes>(content, filename, type)
	}
}
