import { vi } from "vitest"

export class FileReaderInterfaceMock extends EventTarget {
	public result: string | ArrayBuffer | null = null
	public error: DOMException | null = null
	public readyState: number = 0

	public onload:
		| ((
				this: FileReaderInterfaceMock,
				ev: ProgressEvent<FileReaderInterfaceMock>,
		  ) => void)
		| null = null
	public onerror:
		| ((
				this: FileReaderInterfaceMock,
				ev: ProgressEvent<FileReaderInterfaceMock>,
		  ) => void)
		| null = null
	public onloadend:
		| ((
				this: FileReaderInterfaceMock,
				ev: ProgressEvent<FileReaderInterfaceMock>,
		  ) => void)
		| null = null
	public onabort:
		| ((
				this: FileReaderInterfaceMock,
				ev: ProgressEvent<FileReaderInterfaceMock>,
		  ) => void)
		| null = null
	public onloadstart:
		| ((
				this: FileReaderInterfaceMock,
				ev: ProgressEvent<FileReaderInterfaceMock>,
		  ) => void)
		| null = null
	public onprogress:
		| ((
				this: FileReaderInterfaceMock,
				ev: ProgressEvent<FileReaderInterfaceMock>,
		  ) => void)
		| null = null

	public abort = vi.fn((): void => {
		this.readyState = 2
		this.result = null
		this.error = new DOMException("Aborted", "AbortError")
		const event = this.createProgressEvent()
		this.onloadend?.(event)
		this.onabort?.(event)
		this.dispatchEvent(new ProgressEvent("abort"))
		this.dispatchEvent(new ProgressEvent("loadend"))
	})

	public readAsText = vi.fn((_blob: Blob): void => {
		this.readyState = 1
		const startEvent = this.createProgressEvent()
		this.onloadstart?.(startEvent)
		this.dispatchEvent(new ProgressEvent("loadstart"))
		setTimeout(() => {
			this.result = "mock text"
			this.readyState = 2
			const event = this.createProgressEvent()
			this.onload?.(event)
			this.onloadend?.(event)
			this.dispatchEvent(new ProgressEvent("load"))
			this.dispatchEvent(new ProgressEvent("loadend"))
		}, 0)
	})

	public readAsDataURL = vi.fn((_blob: Blob): void => {
		this.readyState = 1
		const startEvent = this.createProgressEvent()
		this.onloadstart?.(startEvent)
		this.dispatchEvent(new ProgressEvent("loadstart"))
		setTimeout(() => {
			this.result = "data:mock;base64,ZmFrZQ=="
			this.readyState = 2
			const event = this.createProgressEvent()
			this.onload?.(event)
			this.onloadend?.(event)
			this.dispatchEvent(new ProgressEvent("load"))
			this.dispatchEvent(new ProgressEvent("loadend"))
		}, 0)
	})

	public readAsArrayBuffer = vi.fn((_blob: Blob): void => {
		this.readyState = 1
		const startEvent = this.createProgressEvent()
		this.onloadstart?.(startEvent)
		this.dispatchEvent(new ProgressEvent("loadstart"))
		setTimeout(() => {
			this.result = new ArrayBuffer(8)
			this.readyState = 2
			const event = this.createProgressEvent()
			this.onload?.(event)
			this.onloadend?.(event)
			this.dispatchEvent(new ProgressEvent("load"))
			this.dispatchEvent(new ProgressEvent("loadend"))
		}, 0)
	})

	private createProgressEvent(): ProgressEvent<FileReaderInterfaceMock> {
		return new ProgressEvent("mock", {
			lengthComputable: false,
			loaded: 0,
			total: 0,
		}) as ProgressEvent<FileReaderInterfaceMock>
	}
}
