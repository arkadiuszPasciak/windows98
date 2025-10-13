import { vi } from "vitest"

class MediaStreamImageCaptureAPIMock {
	private MediaStreamClass = this.createMediaStreamMock()

	private createMediaStreamTrackMock() {
		return class {
			kind = "video"
			enabled = true
			muted = false
			stop = vi.fn()
		}
	}

	private createMediaStreamMock() {
		class MediaStream {
			getTracks = vi.fn()
		}
		return MediaStream
	}

	private createImageCaptureMock() {
		return class {
			track = vi.fn().mockResolvedValue({})
			getPhotoCapabilities = vi.fn().mockResolvedValue({})
			getPhotoSettings = vi.fn().mockResolvedValue({})
			takePhoto = vi.fn().mockResolvedValue({})
		}
	}

	private createMediaDevicesMock() {
		return {
			enumerateDevices: vi.fn().mockResolvedValue([
				{ deviceId: "1", kind: "videoinput", label: "Camera 1" },
				{ deviceId: "2", kind: "audioinput", label: "Microphone 1" },
			]),
			getDisplayMedia: vi.fn().mockResolvedValue(new this.MediaStreamClass()),
			getSupportedConstraints: vi.fn().mockReturnValue({
				width: true,
				height: true,
				frameRate: true,
			}),
			getUserMedia: vi.fn().mockResolvedValue(new this.MediaStreamClass()),
		}
	}

	public implementMock() {
		vi.stubGlobal("MediaStream", this.MediaStreamClass)
		vi.stubGlobal("navigator", {
			mediaDevices: this.createMediaDevicesMock(),
		})
		vi.stubGlobal("ImageCapture", this.createImageCaptureMock())
		vi.stubGlobal("MediaStreamTrack", this.createMediaStreamTrackMock())
	}
}

export const mediaStreamImageCaptureAPIMock =
	new MediaStreamImageCaptureAPIMock()
