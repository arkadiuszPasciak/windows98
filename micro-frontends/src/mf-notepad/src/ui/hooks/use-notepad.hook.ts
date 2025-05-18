import { useContext } from "react"
import { DomainContext } from "../context"

export function useNotepad() {
	const notepadeDomain = useContext(DomainContext)

	return notepadeDomain
}
