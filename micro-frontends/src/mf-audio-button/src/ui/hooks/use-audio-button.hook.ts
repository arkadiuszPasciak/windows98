import { useContext } from "react"
import { DomainContext } from "../context"

export function useAudioButton() {
	const audioButtonDomain = useContext(DomainContext)

	return audioButtonDomain
}
