import type { FunctionComponent } from "react"
import { Game } from "../game"
import { Starter } from "../starter"
import { useOrchestrator } from "./use-orchestrator.hook"

export const Orchestrator: FunctionComponent = () => {
	const { isGameStarted, restartGame, startGame } = useOrchestrator()
	return (
		<>
			{!isGameStarted && <Starter onStartGame={startGame} />}
			{isGameStarted && <Game onRestartGame={restartGame} />}
		</>
	)
}
