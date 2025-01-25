import type { EventBusDomainContract } from "../contracts";
import type { EventBusSubscriber } from "../models";
declare class EventBusDomain implements EventBusDomainContract {
    private events;
    emit<Data, EventName extends string>(event: EventName, data?: Data): void;
    off<Data, EventName extends string>(event: EventName, listenerToRemove?: EventBusSubscriber<Data>): void;
    on<Data, EventName extends string>(event: EventName, listener: EventBusSubscriber<Data>): void;
    once<Data, EventName extends string>(event: EventName, listener: EventBusSubscriber<Data>): void;
}
export declare const MSEventBus: EventBusDomain;
export {};
