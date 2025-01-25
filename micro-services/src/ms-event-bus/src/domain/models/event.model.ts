import type { EventBusSubscriber } from "./subscriber.model"

// biome-ignore lint/suspicious/noExplicitAny: want to keep this as any
export type Events = Record<string, EventBusSubscriber<any>[]>
