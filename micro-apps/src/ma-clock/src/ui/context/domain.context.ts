import { createContext } from "react"
import { clockService } from "../../domain/services/clock.service"

export const DomainContext = createContext(clockService)
