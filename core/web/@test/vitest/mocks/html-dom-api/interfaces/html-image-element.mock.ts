export class HTMLImageElementInterfaceMock {
	onload: ((this: GlobalEventHandlers, ev: Event) => void) | null = null
	onerror: ((this: GlobalEventHandlers, ev: Event | string) => void) | null =
		null
	private _src: string = ""
	width: number = 0
	height: number = 0

	constructor(width: number = 100, height: number = 100) {
		this.width = width
		this.height = height
	}

	set src(value: string) {
		this._src = value
		setTimeout(() => {
			if (this.onload) {
				this.onload.call(
					this as unknown as GlobalEventHandlers,
					new Event("load"),
				)
			}
		}, 0)
	}
	get src() {
		return this._src
	}

	__triggerLoad() {
		if (this.onload)
			this.onload.call(
				this as unknown as GlobalEventHandlers,
				new Event("load"),
			)
	}
	__triggerError(error?: Event | string) {
		if (this.onerror)
			this.onerror.call(
				this as unknown as GlobalEventHandlers,
				error || new Event("error"),
			)
	}
}
