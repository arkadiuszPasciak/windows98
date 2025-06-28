import { MFTicTacToe } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useTicTacToe } from "./use-tic-tac-toe.hook"

export const TicTacToe: FunctionComponent = () => {
	const { onCloseProgram } = useTicTacToe()

	return <MFTicTacToe onCloseProgram={onCloseProgram} />
}
