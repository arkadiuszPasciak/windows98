import { useAudioButton } from "../../hooks"

export function useButton() {
	const audioButtonDomain = useAudioButton()

	const isMuted = audioButtonDomain.isMuted

	const toggleSound = (): void => {
		audioButtonDomain.toggleSound()
	}

	return {
		isMuted,
		toggleSound,
	}
}
