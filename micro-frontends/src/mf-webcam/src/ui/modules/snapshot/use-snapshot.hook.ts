import { useVideoRef } from "../../hooks"
import { useWebcam } from "../../hooks"

export function useSnapshot() {
	const videoRef = useVideoRef()
	const { domain } = useWebcam()

	return {
		videoRef,
		mediaStream: domain.mediaStream,
	}
}
