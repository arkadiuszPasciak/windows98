import { useContext } from "react"
import { DomainContext } from "../context"

export function useCaseConverter() {
	const domain = useContext(DomainContext)

	return { domain }
}
