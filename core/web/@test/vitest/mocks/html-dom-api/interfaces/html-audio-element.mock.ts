export class HTMLAudioElementInterfaceMock {
	oncanplay: ((this: GlobalEventHandlers, ev: Event) => void) | null = null
	onerror: ((this: GlobalEventHandlers, ev: Event | string) => void) | null =
		null
	private _src: string = ""
	volume: number = 1.0
	muted: boolean = false
	paused: boolean = true
	currentTime: number = 0
	duration: number = 0

	constructor(src?: string) {
		if (src) {
			this._src = src
		}
	}

	set src(value: string) {
		this._src = value
		setTimeout(() => {
			if (this.oncanplay) {
				this.oncanplay.call(
					this as unknown as GlobalEventHandlers,
					new Event("canplay"),
				)
			}
		}, 0)
	}
	get src() {
		return this._src
	}

	play() {
		this.paused = false
	}
	pause() {
		this.paused = true
	}

	__triggerCanPlay() {
		if (this.oncanplay)
			this.oncanplay.call(
				this as unknown as GlobalEventHandlers,
				new Event("canplay"),
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
