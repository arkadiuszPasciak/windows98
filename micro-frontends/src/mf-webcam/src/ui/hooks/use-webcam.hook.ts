import { useContext } from "react"
import { DomainContext } from "../context"

export function useWebcam() {
	const domain = useContext(DomainContext)

	return { domain }
}
