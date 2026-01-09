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

	public async downloadFile(file: File, filename: string): Promise<void> {
		await this.downloadFileStrategy.download(file, filename)
	}

	public async openFile(): Promise<File> {
		return this.openFileStrategy.open()
	}

	public async saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void> {
		this.saveFileStrategy.save<FileType>(content, filename, type)
	}
}
