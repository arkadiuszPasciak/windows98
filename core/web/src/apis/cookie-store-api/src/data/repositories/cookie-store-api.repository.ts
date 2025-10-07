import { CatchError } from "@windows98/toolkit"
import type { CookieStoreAPIRepositoryContract } from "../contracts"

export class CookieStoreAPIRepository
	implements CookieStoreAPIRepositoryContract
{
	public async delete(id: string): Promise<void> {
		await window.cookieStore.delete(id)
	}

	@CatchError()
	public async get(id: string): Promise<CookieListItem> {
		const cookie = await window.cookieStore.get(id)

		if (!cookie) throw new Error(`Cookie with id '${id}' not found`)

		return cookie
	}

	public async getAll(): Promise<CookieList> {
		return await window.cookieStore.getAll()
	}

	public async set(id: string, value: string): Promise<void> {
		await window.cookieStore.set(id, value)
	}
}
