import type {
	HTMLAudioElementInterface,
	HTMLImageElementInterface,
} from "../interfaces"

export interface HTMLDOMAPIRepositoryContract {
	createNewAudio(src?: string): HTMLAudioElementInterface
	createNewImage(width?: number, height?: number): HTMLImageElementInterface
}
