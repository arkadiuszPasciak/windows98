import type { Maybe } from "@windows98/toolkit"
import type { NetworkInformationAPIRepositoryContract } from "../contracts"
import type { NetworkInformationInterface } from "../interfaces"
import type {
	NetworkChangeEvent,
	NetworkConnectionType,
	NetworkEffectiveConnectionType,
	NetworkInformationState,
} from "../models"

declare global {
	interface Navigator {
		connection: NetworkInformationInterface
	}
}

export class NetworkInformationAPIRepository
	implements NetworkInformationAPIRepositoryContract
{
	// Map user listeners to the internal wrapper so they can be removed later
	private listenerMap: WeakMap<
		(event: NetworkChangeEvent) => void,
		EventListener
	> = new WeakMap()
	public get type(): NetworkConnectionType {
		return window.navigator.connection.type
	}

	public get effectiveType(): NetworkEffectiveConnectionType {
		return window.navigator.connection.effectiveType
	}

	public get downlink(): number {
		return window.navigator.connection.downlink
	}

	public get downlinkMax(): number {
		return window.navigator.connection.downlinkMax
	}

	public get rtt(): number {
		return window.navigator.connection.rtt
	}

	public get saveData(): boolean {
		return window.navigator.connection.saveData
	}

	public addEventListener(
		type: "change",
		listener: (this: NetworkInformationInterface, event: Event) => void,
	): void {
		window.navigator.connection.addEventListener(type, listener)
	}

	public removeEventListener(
		type: "change",
		listener: (this: NetworkInformationInterface, event: Event) => void,
	): void {
		window.navigator.connection.removeEventListener(type, listener)
	}

	public getState(): NetworkInformationState {
		return {
			type: this.type,
			effectiveType: this.effectiveType,
			downlink: this.downlink,
			downlinkMax: this.downlinkMax,
			rtt: this.rtt,
			saveData: this.saveData,
		}
	}

	public onChange(listener: (event: NetworkChangeEvent) => void): void {
		let previousState: Maybe<NetworkInformationState> = null

		const wrapper: EventListener = () => {
			const currentState = this.getState()
			listener({
				previousType: previousState?.type,
				previousEffectiveType: previousState?.effectiveType,
				previousDownlink: previousState?.downlink,
				previousRtt: previousState?.rtt,
				previousSaveData: previousState?.saveData,
				current: currentState,
			})
			previousState = currentState
		}

		// store mapping so offChange can remove the same wrapper
		this.listenerMap.set(listener, wrapper)
		this.addEventListener("change", wrapper)
	}

	public offChange(listener: (event: NetworkChangeEvent) => void): void {
		const wrapper = this.listenerMap.get(listener)
		if (wrapper) {
			this.removeEventListener("change", wrapper)
			this.listenerMap.delete(listener)
		}
	}
}
