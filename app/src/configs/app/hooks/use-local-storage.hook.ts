import { MSLocalStorage } from "@windows98/micro-services"
import type { AppStorage } from "../types"

export function useLocalStorage() {
	const localStorage = new MSLocalStorage<AppStorage>()

	return localStorage
}
