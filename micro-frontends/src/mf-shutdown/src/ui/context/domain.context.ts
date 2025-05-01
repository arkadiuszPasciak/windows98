import { createContext } from "react"
import { shutdownDomain } from "../../domain/domains"

export const DomainContext = createContext(shutdownDomain)
