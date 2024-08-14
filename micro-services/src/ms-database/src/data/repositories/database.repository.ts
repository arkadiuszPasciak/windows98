import type { Maybe } from "@windows98/toolkit"
import type { DatabaseRepositoryContract } from "../../domain/contracts/repository.contract"

export class DatabaseRepository implements DatabaseRepositoryContract {
	private database: Maybe<IDBDatabase> = null

	constructor(
		private databaseName: string,
		private storeName: string,
	) {}

	public async open(): Promise<void> {
		return new Promise((resolve, reject) => {
			const request = window.indexedDB.open(this.databaseName)

			request.onerror = () => reject(request.error)
			request.onsuccess = () => {
				this.database = request.result
				resolve()
			}
			request.onupgradeneeded = (event) => {
				this.database = (event.target as IDBOpenDBRequest).result
				this.database.createObjectStore(this.storeName)
			}
		})
	}

	public async add<T>(item: T): Promise<void> {
		this.getStore("readwrite").add(item)
	}

	public async get<T>(key: IDBValidKey): Promise<IDBRequest<T>> {
		return this.getStore("readonly").get(key)
	}

	public async update<T>(key: IDBValidKey, item: T): Promise<void> {
		this.getStore("readwrite").put(item, key)
	}

	public async delete(key: IDBValidKey): Promise<void> {
		this.getStore("readwrite").delete(key)
	}

	private getStore(mode: IDBTransactionMode): IDBObjectStore {
		if (!this.database) {
			throw new Error("Database not open")
		}

		const transaction: IDBTransaction = this.database.transaction(
			this.storeName,
			mode,
		)
		return transaction.objectStore(this.storeName)
	}
}
