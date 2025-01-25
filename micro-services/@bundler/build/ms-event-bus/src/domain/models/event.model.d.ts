import type { EventBusSubscriber } from "./subscriber.model";
export type Events = Record<string, EventBusSubscriber<any>[]>;
