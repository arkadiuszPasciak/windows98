import { URLAPI } from "@windows98/web"
import type { DownloadFileStrategyContract } from "../../contracts"

export class DownloadFileStrategy implements DownloadFileStrategyContract {
	private urlAPI: URLAPI

	constructor() {
		this.urlAPI = new URLAPI()
	}

	public download(blob: Blob, filename: string): void {
		const link = document.createElement("a")
		link.href = this.urlAPI.createObjectURL(blob)
		link.download = filename

		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}
}
