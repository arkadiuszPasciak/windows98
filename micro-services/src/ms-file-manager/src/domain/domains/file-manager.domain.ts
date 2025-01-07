import type { FileManagerDomainContract } from "../contracts"
import type { EFileTextTypes } from "../models"

export class FileManagerDomain implements FileManagerDomainContract {
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

	public async saveFile(
		content: string,
		filename: string,
		type: EFileTextTypes,
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
