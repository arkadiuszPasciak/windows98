export function restartSystem(window: Window): void {
	if (!window) {
		return
	}

	window.location.reload()
}

export function shutDownSystem(window: Window): void {
	if (!window) {
		return
	}

	window.location.href = "https://google.com/"
}
