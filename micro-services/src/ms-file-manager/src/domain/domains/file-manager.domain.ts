import type {
	FileManagerDomainContract,
	OpenFileStrategyContract,
	SaveFileStrategyContract,
} from "../contracts"
import { SaveFileStrategy } from "./strategies"
import { OpenFileStrategy } from "./strategies/open-file.strategy"

export class FileManagerDomain implements FileManagerDomainContract {
	private openFileStrategy: OpenFileStrategyContract
	private saveFileStrategy: SaveFileStrategyContract

	constructor() {
		this.openFileStrategy = new OpenFileStrategy()
		this.saveFileStrategy = new SaveFileStrategy()
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
