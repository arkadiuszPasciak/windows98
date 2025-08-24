import { MSMediaDevices } from "@windows98/micro-services"
import { LoadingStateHelper, type Maybe } from "@windows98/toolkit"
import { makeObservable, observable } from "mobx"
import type { WebcamDomainContract } from "../contracts"

export class WebcamDomain
	extends LoadingStateHelper
	implements WebcamDomainContract
{
	private readonly msMediaDevices = MSMediaDevices
	mediaStream: Maybe<MediaStream> = null

	constructor() {
		super()
		makeObservable(this, {
			mediaStream: observable,
		})
	}

	async generateMediaStream(): Promise<void> {
		this.mediaStream = await this.msMediaDevices.requestCameraStream({
			video: true,
		})
	}
}

export const webcamDomain = new WebcamDomain()
