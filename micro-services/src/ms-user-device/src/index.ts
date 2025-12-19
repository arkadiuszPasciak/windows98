export { MSUserDevice } from "./domain/domains"

export namespace MSUserDeviceTypes {
	export type BatteryInformation = import("./domain/models").BatteryInformation
	export type MemoryInformation = import("./domain/models").MemoryInformation
	export type NetworkInformation = import("./domain/models").NetworkInformation
	export type ScreenInformation = import("./domain/models").ScreenInformation
}
