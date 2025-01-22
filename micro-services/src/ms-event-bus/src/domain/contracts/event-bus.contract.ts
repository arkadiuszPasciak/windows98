import type { EventBusSubscriber } from "../models"

export interface EventBusDomainContract {
	emit<Data, EventName extends string>(event: EventName, data?: Data): void
	off<Data, EventName extends string>(
		event: EventName,
		listenerToRemove?: EventBusSubscriber<Data>,
	): void
	on<Data, EventName extends string>(
		event: EventName,
		listener: EventBusSubscriber<Data>,
	): void
	once<Data, EventName extends string>(
		event: EventName,
		listener: EventBusSubscriber<Data>,
	): void
}
