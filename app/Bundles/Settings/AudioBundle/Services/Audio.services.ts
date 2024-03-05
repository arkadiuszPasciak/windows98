export function muteAllSound(status: boolean): void {
	const mediaElements = document.querySelectorAll(
		"audio, video",
	) as NodeListOf<Element>

	Array.from(mediaElements).forEach((element: Element): void => {
		const mediaElement = element as HTMLMediaElement

		mediaElement.muted = status
	})
}
