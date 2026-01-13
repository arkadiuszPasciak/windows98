import { useContext } from "react"
import { DomainContext } from "../context"

export function useImageConverter() {
	const domain = useContext(DomainContext)

	return { domain }
}
