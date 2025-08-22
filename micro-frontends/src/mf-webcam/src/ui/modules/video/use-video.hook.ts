import { useEffect, useRef } from "react"
import { useWebcam } from "../../hooks"

export function useVideo() {
	const { domain } = useWebcam()
	const videoRef = useRef<HTMLVideoElement>(null)

	const setupMediaStream = async () => {
		await domain.generateMediaStream()

		if (videoRef.current) {
			videoRef.current.srcObject = domain.mediaStream
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: render only once
	useEffect(() => {
		setupMediaStream()
	}, [])

	return {
		videoRef,
	}
}
