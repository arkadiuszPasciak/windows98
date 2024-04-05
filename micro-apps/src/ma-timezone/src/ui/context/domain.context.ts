import { createContext } from "react"
import { timezoneService } from "../../domain/services/timezone.service"

export const DomainContext = createContext(timezoneService)
