import { useContext } from "react"
import { DomainContext } from "../context"

export function useSnapshot() {
	const domain = useContext(DomainContext)

	return { domain }
}
