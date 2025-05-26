import { useContext } from "react"
import { DomainContext } from "../context"

export function useDomain() {
	const systemInformationDomain = useContext(DomainContext)

	return systemInformationDomain
}
