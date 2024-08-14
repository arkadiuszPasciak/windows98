import { DatabaseRepository } from "../../data/repositories/database.repository"
import type { DatabaseServiceContract } from "../contracts/service.contract"

export default class DatabaseService implements DatabaseServiceContract {
	private readonly databaseRepository: DatabaseRepository

	constructor(
		public readonly databaseName: string,
		public readonly storeName: string,
	) {
		this.databaseRepository = new DatabaseRepository(
			this.databaseName,
			this.storeName,
		)
	}

	async open(): Promise<void> {
		return this.databaseRepository.open()
	}

	public async add<T>(item: T): Promise<void> {
		return this.databaseRepository.add(item)
	}

	public async get<T>(key: IDBValidKey): Promise<IDBRequest<T>> {
		return this.databaseRepository.get(key)
	}

	public async update<T>(key: IDBValidKey, item: T): Promise<void> {
		return this.databaseRepository.update(key, item)
	}

	public async delete(key: IDBValidKey): Promise<void> {
		return this.databaseRepository.delete(key)
	}
}
