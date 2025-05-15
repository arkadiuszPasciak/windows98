import type {
	FileManagerDomainContract,
	SaveFileStrategyContract,
} from "../contracts"
import { SaveFileStrategy } from "./strategies"

export class FileManagerDomain implements FileManagerDomainContract {
	private saveFileStrategy: SaveFileStrategyContract

	constructor() {
		this.saveFileStrategy = new SaveFileStrategy()
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

	public async saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void> {
		this.saveFileStrategy.save<FileType>(content, filename, type)
	}
}
