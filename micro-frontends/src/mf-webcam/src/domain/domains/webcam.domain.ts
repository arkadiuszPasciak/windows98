import { MSMediaDevices } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { WebcamDomainContract } from "../contracts"

export class WebcamDomain implements WebcamDomainContract {
	mediaStream: Maybe<MediaStream> = null

	constructor() {
		makeAutoObservable(this)
	}

	async generateMediaStream(): Promise<void> {
		this.mediaStream = await MSMediaDevices.requestCameraStream({ video: true })
	}
}

export const webcamDomain = new WebcamDomain()
