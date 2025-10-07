export interface CookieStoreAPIRepositoryContract {
	delete(id: string): Promise<void>
	get(id: string): Promise<CookieListItem>
	getAll(): Promise<CookieList>
	set(id: string, value: string): Promise<void>
}
