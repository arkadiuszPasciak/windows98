export type TDevices = "mobile" | "desktop"

export interface IDevicesRegex {
	name: TDevices
	regex: RegExp
}
