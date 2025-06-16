import { useState } from "react"

export function useOrchestrator() {
	const [isGameStarted, setGameStarted] = useState<boolean>(false)

	const restartGame = (): void => {
		setGameStarted(false)
	}

	const startGame = (): void => {
		setGameStarted(true)
	}

	return {
		isGameStarted,
		restartGame,
		startGame,
	}
}
