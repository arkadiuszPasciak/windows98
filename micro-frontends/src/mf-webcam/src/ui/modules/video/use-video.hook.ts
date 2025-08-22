import { LoadingState } from "@windows98/toolkit"
import { useEffect, useRef } from "react"
import { useWebcam } from "../../hooks"

export function useVideo() {
	const { domain } = useWebcam()
	const videoRef = useRef<HTMLVideoElement>(null)

	const setupMediaStream = async () => {
		try {
			domain.setLoadingState(LoadingState.LOADING)
			await domain.generateMediaStream()

			if (videoRef.current && domain.mediaStream) {
				videoRef.current.srcObject = domain.mediaStream
				domain.setLoadingState(LoadingState.SUCCESS)
			}
		} catch {
			domain.setLoadingState(LoadingState.ERROR)
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
