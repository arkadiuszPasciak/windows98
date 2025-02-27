import { useContext } from "react"
import { DomainContext } from "../context"

export function useSaveFile() {
	const saveFileDomain = useContext(DomainContext)

	return saveFileDomain
}
