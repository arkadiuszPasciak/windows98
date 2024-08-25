export function muteAllSound(status: boolean): void {
	const mediaElements = document.querySelectorAll(
		"audio, video",
	) as NodeListOf<Element>

	for (const element of Array.from(mediaElements)) {
		const mediaElement = element as HTMLMediaElement
		mediaElement.muted = status
	}
}
