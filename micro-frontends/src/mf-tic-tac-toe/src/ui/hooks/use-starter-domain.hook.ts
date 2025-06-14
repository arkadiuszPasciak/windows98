import { useContext } from "react"
import { StarterDomainContext } from "../context"

export function useStarterDomain() {
	const starterDomain = useContext(StarterDomainContext)

	return { starterDomain }
}
