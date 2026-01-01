import type {
	DownloadFileStrategyContract,
	FileManagerDomainContract,
	OpenFileStrategyContract,
	SaveFileStrategyContract,
} from "../contracts"
import { SaveFileStrategy } from "./strategies"
import { DownloadFileStrategy } from "./strategies/download-file.strategy"
import { OpenFileStrategy } from "./strategies/open-file.strategy"

export class FileManagerDomain implements FileManagerDomainContract {
	private downloadFileStrategy: DownloadFileStrategyContract
	private openFileStrategy: OpenFileStrategyContract
	private saveFileStrategy: SaveFileStrategyContract

	constructor() {
		this.downloadFileStrategy = new DownloadFileStrategy()
		this.openFileStrategy = new OpenFileStrategy()
		this.saveFileStrategy = new SaveFileStrategy()
	}

	public downloadFile(blob: Blob, filename: string): void {
		this.downloadFileStrategy.download(blob, filename)
	}

	public async openFile<SelectedFile extends string>(): Promise<SelectedFile> {
		return this.openFileStrategy.open<SelectedFile>()
	}

	public async saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void> {
		this.saveFileStrategy.save<FileType>(content, filename, type)
	}
}
