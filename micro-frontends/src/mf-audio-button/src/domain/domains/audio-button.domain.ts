import { makeAutoObservable } from "mobx"
import type { AudioButtonDomainContract } from "../contracts"

export class AudioButtonDomain implements AudioButtonDomainContract {
	public isMuted = false

	constructor() {
		makeAutoObservable(this)
	}

	public async toggleSound(): Promise<void> {
		this.isMuted = !this.isMuted

		const mediaElements: NodeListOf<HTMLMediaElement> =
			document.querySelectorAll("audio, video")

		for (const element of Array.from(mediaElements)) {
			const mediaElement: HTMLMediaElement = element
			mediaElement.muted = this.isMuted
		}
	}
}

export const audioButtonDomain = new AudioButtonDomain()
