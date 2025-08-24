import { MSMediaDevices } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { SnapshotDomainContract } from "../contracts"

export class SnapshotDomain implements SnapshotDomainContract {
	private readonly msMediaDevices = MSMediaDevices
	snapshotUrl: Maybe<string> = null

	constructor() {
		makeAutoObservable(this)
	}

	async getSnapshot(videoElement: HTMLVideoElement): Promise<void> {
		this.snapshotUrl = await this.msMediaDevices.getSnapshot(videoElement)
	}
}

export const snapshotDomain = new SnapshotDomain()
