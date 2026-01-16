export class MediaDevicesInterfaceMock {
	public devices: MediaDeviceInfo[] = []

	public enumerateDevices(): Promise<MediaDeviceInfo[]> {
		return Promise.resolve(this.devices)
	}

	public getDisplayMedia(): Promise<MediaStream> {
		return Promise.resolve("media-stream" as unknown as MediaStream)
	}

	public getSupportedConstraints(): MediaTrackSupportedConstraints {
		return {
			width: true,
			height: true,
			frameRate: true,
			aspectRatio: true,
			facingMode: true,
			sampleRate: true,
			sampleSize: true,
			echoCancellation: true,
			autoGainControl: true,
			noiseSuppression: true,
			channelCount: true,
			deviceId: true,
			groupId: true,
		}
	}

	public getUserMedia(
		_constraints: MediaStreamConstraints,
	): Promise<MediaStream> {
		return Promise.resolve("media-stream" as unknown as MediaStream)
	}
}
