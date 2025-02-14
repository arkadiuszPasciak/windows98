import { useAudioButton } from "../../hooks"

export function useButton() {
	const audioButtonDomain = useAudioButton()

	const isMuted = audioButtonDomain.isMuted

	const toggleSound = (): void => {
		console.log("toggleSound")
		audioButtonDomain.toggleSound()
	}

	return {
		isMuted,
		toggleSound,
	}
}
