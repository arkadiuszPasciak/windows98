import type { HTMLDOMAPIRepositoryContract } from "../contracts"
import type {
	HTMLAudioElementInterface,
	HTMLImageElementInterface,
} from "../interfaces"

export class HTMLDOMAPIRepository implements HTMLDOMAPIRepositoryContract {
	public createNewAudio(src?: string): HTMLAudioElementInterface {
		return new Audio(src)
	}

	public createNewImage(
		width?: number,
		height?: number,
	): HTMLImageElementInterface {
		return new Image(width, height)
	}
}
