import { MSVideoManager } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { SnapshotDomainContract } from "../contracts"

export class SnapshotDomain implements SnapshotDomainContract {
	private readonly msVideoManager = MSVideoManager
	snapshotUrl: Maybe<string> = null

	constructor() {
		makeAutoObservable(this)
	}

	async getSnapshot(videoElement: HTMLVideoElement): Promise<void> {
		this.snapshotUrl = await this.msVideoManager.getSnapshot(videoElement)
	}
}

export const snapshotDomain = new SnapshotDomain()
