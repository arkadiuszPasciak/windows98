import { vi } from "vitest"

class MediaRecorderMock {
	public state = "inactive"
	public stream: MediaStream
	public mimeType = "video/webm"
	public ondataavailable: ((event: BlobEvent) => void) | null = null
	public onstop: (() => void) | null = null
	public onstart: (() => void) | null = null
	public onpause: (() => void) | null = null
	public onresume: (() => void) | null = null
	public onerror: ((event: Event) => void) | null = null

	constructor(stream: MediaStream, _options?: MediaRecorderOptions) {
		this.stream = stream
	}

	start = vi.fn(() => {
		this.state = "recording"
		if (this.onstart) this.onstart()
	})

	stop = vi.fn(() => {
		this.state = "inactive"
		if (this.onstop) this.onstop()
		if (this.ondataavailable) {
			const blob = new Blob([], { type: this.mimeType })
			this.ondataavailable(new BlobEvent("dataavailable", { data: blob }))
		}
	})

	pause = vi.fn(() => {
		this.state = "paused"
		if (this.onpause) this.onpause()
	})

	resume = vi.fn(() => {
		this.state = "recording"
		if (this.onresume) this.onresume()
	})

	addEventListener = vi.fn()
	removeEventListener = vi.fn()
	dispatchEvent = vi.fn(() => true)
}

class MediaStreamRecordingAPIMock {
	public createMock() {
		return MediaRecorderMock as unknown as MediaRecorder
	}

	public implementMock() {
		vi.stubGlobal("MediaRecorder", this.createMock())
	}
}

export const mediaStreamRecordingAPIMock = new MediaStreamRecordingAPIMock()
