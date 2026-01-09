import { CatchError, type Maybe } from "@windows98/toolkit"
import type { DownloadFileStrategyContract } from "../../contracts"

export class DownloadFileStrategy implements DownloadFileStrategyContract {
	@CatchError()
	public async download(file: File, filename: string): Promise<void> {
		const dataURL = await this.getDataUrlFromFile(file)

		if (dataURL === null) {
			throw new Error(
				`Failed to read file "${filename}": FileReader returned no data (null result).`,
			)
		}

		const link = document.createElement("a")
		link.href = dataURL
		link.download = filename

		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	private getDataUrlFromFile(file: File): Promise<Maybe<string>> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()

			reader.onload = () => {
				resolve(reader.result as Maybe<string>)
			}

			reader.onerror = (error) => {
				reject(error)
			}

			reader.readAsDataURL(file)
		})
	}
}
