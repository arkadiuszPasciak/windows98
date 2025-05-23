import { SingletonFactory } from "@windows98/toolkit"
import type { EventBusDomainContract } from "../contracts"
import type { EventBusSubscriber, Events } from "../models"

class EventBusDomain implements EventBusDomainContract {
	private events: Events = {}

	public emit<Data, EventName extends string>(
		event: EventName,
		data?: Data,
	): void {
		if (!this.events[event]) return

		for (const listener of this.events[event]) {
			listener(data)
		}
	}

	public off<Data, EventName extends string>(
		event: EventName,
		listenerToRemove?: EventBusSubscriber<Data>,
	): void {
		if (!this.events[event]) return

		this.events[event] = this.events[event].filter(
			(listener) => listener !== listenerToRemove,
		)
	}

	public on<Data, EventName extends string>(
		event: EventName,
		listener: EventBusSubscriber<Data>,
	): void {
		if (!this.events[event]) {
			this.events[event] = []
		}

		this.events[event].push(listener)
	}

	public once<Data, EventName extends string>(
		event: EventName,
		listener: EventBusSubscriber<Data>,
	): void {
		const wrapper: EventBusSubscriber<Data> = (data?: Data) => {
			listener(data)
			this.off(event, wrapper)
		}

		this.on(event, wrapper)
	}
}

export const MSEventBus = SingletonFactory.getInstance(EventBusDomain)
