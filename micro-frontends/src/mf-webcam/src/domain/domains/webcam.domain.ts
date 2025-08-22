import { MSMediaDevices } from "@windows98/micro-services"
import { LoadingStateHelper, type Maybe } from "@windows98/toolkit"
import { makeObservable, observable } from "mobx"
import type { WebcamDomainContract } from "../contracts"

export class WebcamDomain
	extends LoadingStateHelper
	implements WebcamDomainContract
{
	mediaStream: Maybe<MediaStream> = null

	constructor() {
		super()
		makeObservable(this, {
			mediaStream: observable,
		})
	}

	async generateMediaStream(): Promise<void> {
		this.mediaStream = await MSMediaDevices.requestCameraStream({
			video: true,
		})
	}
}

export const webcamDomain = new WebcamDomain()
