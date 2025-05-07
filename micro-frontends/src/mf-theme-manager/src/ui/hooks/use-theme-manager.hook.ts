import { useContext } from "react"
import { DomainContext } from "../context"

export function useThemeManager() {
	const domain = useContext(DomainContext)

	return domain
}
