export class ObserverHelper<ObservedValueType> {
	private subscribers: Array<
		(newValue: ObservedValueType, oldValue: ObservedValueType) => void
	> = []

	public subscribe(
		callback: (
			newValue: ObservedValueType,
			oldValue: ObservedValueType,
		) => void,
	): void {
		this.subscribers.push(callback)
	}

	public unsubscribe(
		callback: (
			newValue: ObservedValueType,
			oldValue: ObservedValueType,
		) => void,
	): void {
		this.subscribers = this.subscribers.filter(
			(subscriber) => subscriber !== callback,
		)
	}

	public notify(
		newValue: ObservedValueType,
		oldValue: ObservedValueType,
	): void {
		for (const subscriber of this.subscribers) {
			subscriber(newValue, oldValue)
		}
	}
}
