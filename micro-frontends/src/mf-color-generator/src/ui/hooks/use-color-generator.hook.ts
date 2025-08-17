import { useContext } from "react"
import { DomainContext } from "../context"

export function useColorGenerator() {
	const domain = useContext(DomainContext)

	return { domain }
}
