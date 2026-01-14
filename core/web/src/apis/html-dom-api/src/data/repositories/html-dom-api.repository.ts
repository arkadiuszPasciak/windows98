import type { HTMLDOMAPIRepositoryContract } from "../contracts"
import type { HTMLAudioElementInterface } from "../interfaces"

export class HTMLDOMAPIRepository implements HTMLDOMAPIRepositoryContract {
	public createNewAudio(src?: string): HTMLAudioElementInterface {
		return new Audio(src)
	}
}
