import { MSStorage } from "@windows98/micro-services"
import type { Storage } from "../types"

export const StorageService = new MSStorage<Storage>()
