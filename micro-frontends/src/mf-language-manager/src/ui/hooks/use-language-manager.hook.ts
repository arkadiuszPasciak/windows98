import { useContext } from "react"
import { DomainContext } from "../context"

export function useLanguageManager() {
	const domain = useContext(DomainContext)

	return domain
}
