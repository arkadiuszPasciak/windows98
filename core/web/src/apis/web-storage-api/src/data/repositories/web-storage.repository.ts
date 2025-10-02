import type {
	StorageStrategyContract,
	WebStorageAPIContract,
} from "../contracts"
import { StorageStrategy } from "../strategies"

export class WebStorageRepositoryAPI<StorageKeys>
	implements WebStorageAPIContract<StorageKeys>
{
	public localStorage: StorageStrategyContract<StorageKeys>
	public sessionStorage: StorageStrategyContract<StorageKeys>

	constructor() {
		this.localStorage = new StorageStrategy<StorageKeys>("localStorage")
		this.sessionStorage = new StorageStrategy<StorageKeys>("sessionStorage")
	}
}
