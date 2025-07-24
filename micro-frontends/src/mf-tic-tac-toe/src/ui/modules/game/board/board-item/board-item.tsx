import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import { PlayerSign } from "../../../../../domain/models"
import styles from "./board-item.module.css"
import { BoardItemColour, type BoardItemProps } from "./board-item.type"

const getColor = (value: string): BoardItemColour => {
	switch (value) {
		case PlayerSign.O:
			return BoardItemColour.BLUE
		case PlayerSign.X:
			return BoardItemColour.RED
		default:
			return BoardItemColour.BLACK
	}
}

export const BoardItem: FunctionComponent<BoardItemProps> = ({
	value,
	onClick,
}) => {
	const isDisabled = value.length > 0
	const color = getColor(value)

	return (
		<button
			className={getClassNames([
				styles["board-item"],
				styles[`color-${color}`],
			])}
			type="button"
			disabled={isDisabled}
			onClick={onClick}
		>
			{value}
		</button>
	)
}
