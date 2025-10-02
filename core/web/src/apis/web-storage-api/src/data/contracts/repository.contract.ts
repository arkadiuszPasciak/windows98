import type { StorageStrategyContract } from "./storage-strategy.contract"

export interface WebStorageAPIContract<StorageKeys> {
	localStorage: StorageStrategyContract<StorageKeys>
	sessionStorage: StorageStrategyContract<StorageKeys>
}
