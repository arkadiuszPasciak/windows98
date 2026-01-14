import type { HTMLAudioElementInterface } from "../interfaces"

export interface HTMLDOMAPIRepositoryContract {
	createNewAudio(src?: string): HTMLAudioElementInterface
}
