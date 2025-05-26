import { MSBrowserEnv } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { SystemInformationDomainContract } from "../contracts"

export class SystemInformationDomain
	implements SystemInformationDomainContract
{
	public deviceType
	public operatingSystem
	public browserName
	private msBrowserEnv: MSBrowserEnv

	constructor() {
		makeAutoObservable(this)

		this.msBrowserEnv = new MSBrowserEnv()

		this.deviceType = this.msBrowserEnv.getDeviceType()
		this.operatingSystem = this.msBrowserEnv.getOperatingSystem()
		this.browserName = this.msBrowserEnv.getBrowserName()
	}
}

export const systemInformationDomain = new SystemInformationDomain()
