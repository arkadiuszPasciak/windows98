import { useContext } from "react"
import { DomainContext } from "../context"

export function useDomain() {
	const domain = useContext(DomainContext)

	return { domain }
}
