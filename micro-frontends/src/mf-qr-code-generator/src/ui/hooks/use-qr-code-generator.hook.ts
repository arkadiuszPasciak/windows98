import { useContext } from "react"
import { DomainContext } from "../context"

export function useQRCodeGenerator() {
	const domain = useContext(DomainContext)

	return { domain }
}
