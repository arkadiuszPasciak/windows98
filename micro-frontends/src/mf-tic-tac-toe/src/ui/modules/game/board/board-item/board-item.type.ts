export enum BoardItemColour {
	BLACK = "black",
	BLUE = "blue",
	RED = "red",
}

export interface BoardItemProps {
	value: string
	onClick: () => void
}
