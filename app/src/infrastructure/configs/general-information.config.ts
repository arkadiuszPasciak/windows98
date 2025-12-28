import type { Maybe } from "@windows98/toolkit"
import type { TFunction } from "i18next"
import type {
	Battery,
	GeneralInformation,
	Memory,
	Network,
	Screen,
} from "../types"

class TranslationHelper {
	protected translate: TFunction
	protected translations: Record<string, string>

	constructor(translate: TFunction) {
		this.translate = translate
		this.translations = {
			battery: this.translate("mf-system-information.battery"),
			unknown: this.translate("mf-system-information.unknown"),
			batteryLevel: this.translate("mf-system-information.battery-level"),
			batteryChargingTime: this.translate(
				"mf-system-information.battery-charging-time",
			),
			batteryDischargingTime: this.translate(
				"mf-system-information.battery-discharging-time",
			),
			batteryCharging: this.translate("mf-system-information.battery-charging"),
			yes: this.translate("mf-system-information.yes"),
			no: this.translate("mf-system-information.no"),
			browser: this.translate("mf-system-information.browser"),
			browserName: this.translate("mf-system-information.browser-name"),
			device: this.translate("mf-system-information.device"),
			deviceType: this.translate("mf-system-information.device-type"),
			memory: this.translate("mf-system-information.memory"),
			memoryTotal: this.translate("mf-system-information.memory-total"),
			network: this.translate("mf-system-information.network"),
			networkConnectionType: this.translate(
				"mf-system-information.network-connection-type",
			),
			networkEffectiveConnectionType: this.translate(
				"mf-system-information.network-effective-connection-type",
			),
			networkDownlink: this.translate("mf-system-information.network-downlink"),
			networkMaxDownlink: this.translate(
				"mf-system-information.network-max-downlink",
			),
			networkRtt: this.translate("mf-system-information.network-rtt"),
			networkSaveData: this.translate(
				"mf-system-information.network-save-data",
			),
			operatingSystem: this.translate("mf-system-information.operating-system"),
			operatingSystemName: this.translate(
				"mf-system-information.operating-system-name",
			),
			screen: this.translate("mf-system-information.screen"),
			screenAngle: this.translate("mf-system-information.screen-angle"),
			screenHeight: this.translate("mf-system-information.screen-height"),
			screenFullscreen: this.translate(
				"mf-system-information.screen-fullscreen",
			),
			screenOrientation: this.translate(
				"mf-system-information.screen-orientation",
			),
			screenWidth: this.translate("mf-system-information.screen-width"),
		}
	}
}

export class GeneralInformationBuilder extends TranslationHelper {
	private information: GeneralInformation

	constructor(translate: TFunction) {
		super(translate)
		this.information = []
	}

	withBattery(battery: Maybe<Battery>): this {
		if (battery) {
			this.information.push({
				name: this.translations.battery,
				items: [
					{
						label: this.translations.batteryLevel,
						value: `${battery.batteryLevel}%`,
					},
					{
						label: this.translations.batteryChargingTime,
						value: String(battery.chargingTimeInMinutes),
					},
					{
						label: this.translations.batteryDischargingTime,
						value: String(battery.dischargingTimeInMinutes),
					},
					{
						label: this.translations.batteryCharging,
						value: battery.isCharging
							? this.translations.yes
							: this.translations.no,
					},
				],
			})
		}

		return this
	}

	withBrowser(browserName: Maybe<string>): this {
		if (browserName) {
			this.information.push({
				name: this.translations.browser,
				items: [
					{
						label: this.translations.browserName,
						value: browserName,
					},
				],
			})
		}

		return this
	}

	withDevice(deviceType: Maybe<string>): this {
		if (deviceType) {
			this.information.push({
				name: this.translations.device,
				items: [
					{
						label: this.translations.deviceType,
						value: deviceType,
					},
				],
			})
		}

		return this
	}

	withMemory(memory: Maybe<Memory>): this {
		if (memory) {
			this.information.push({
				name: this.translations.memory,
				items: [
					{
						label: this.translations.memoryTotal,
						value: String(memory.RAMInGB),
					},
				],
			})
		}

		return this
	}

	withNetwork(network: Maybe<Network>): this {
		if (network) {
			this.information.push({
				name: this.translations.network,
				items: [
					{
						label: this.translations.networkConnectionType,
						value: network.connectionType ?? this.translations.unknown,
					},
					{
						label: this.translations.networkEffectiveConnectionType,
						value: network.effectiveConnectionType,
					},
					{
						label: this.translations.networkDownlink,
						value: String(network.downlinkInMbps),
					},
					{
						label: this.translations.networkMaxDownlink,
						value:
							String(network.downlinkMaxInMbps) ?? this.translations.unknown,
					},
					{
						label: this.translations.networkRtt,
						value: String(network.roundTripTimeInMilliseconds),
					},
					{
						label: this.translations.networkSaveData,
						value: network.isSaveData
							? this.translations.yes
							: this.translations.no,
					},
				],
			})
		}

		return this
	}

	withOperatingSystem(operatingSystem: Maybe<string>): this {
		if (operatingSystem) {
			this.information.push({
				name: this.translations.operatingSystem,
				items: [
					{
						label: this.translations.operatingSystemName,
						value: operatingSystem,
					},
				],
			})
		}

		return this
	}

	withScreen(screen: Maybe<Screen>): this {
		if (screen) {
			this.information.push({
				name: this.translations.screen,
				items: [
					{
						label: this.translations.screenAngle,
						value: String(screen.angleInDegrees),
					},
					{
						label: this.translations.screenHeight,
						value: String(screen.heightInPx),
					},
					{
						label: this.translations.screenFullscreen,
						value: screen.isFullscreen
							? this.translations.yes
							: this.translations.no,
					},
					{
						label: this.translations.screenOrientation,
						value: screen.orientationType,
					},
					{
						label: this.translations.screenWidth,
						value: String(screen.widthInPx),
					},
				],
			})
		}

		return this
	}

	build(): GeneralInformation {
		return this.information
	}
}
