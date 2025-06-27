import { MSLocalStorage } from "@windows98/micro-services"
import type { Storage } from "../types"

export const LocalStorageService = new MSLocalStorage<Storage>()
