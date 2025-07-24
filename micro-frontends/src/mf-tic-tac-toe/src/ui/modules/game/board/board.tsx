import { getClassNames } from "@windows98/toolkit"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { BoardItem } from "./board-item"
import styles from "./board.module.css"
import { useBoard } from "./use-board.hook"

export const Board: FunctionComponent = observer(() => {
	const { boardCells, boardType, handleCellClick, isGameFinished } = useBoard()

	if (!boardCells) return null

	const disabledClass = isGameFinished ? styles.disabled : undefined
	const variantClass = styles[`variant-${boardType}`]

	return (
		<div
			data-testid="mf-tic-tac-toe-game-board"
			className={getClassNames([
				styles.board,
				variantClass,
				disabledClass || "",
			])}
		>
			{boardCells.map((cell, index) => (
				<BoardItem
					key={`mf-tic-tac-toe-game-board-item-${index}-${cell}`}
					value={cell}
					onClick={() => handleCellClick(index)}
				/>
			))}
		</div>
	)
})
