import type { ReactNode } from "react"
import type { DSDefaultProps } from "../../types"

export enum DSModalCursor {
	DEFAULT = "default",
	MOVE = "move",
}

export interface DSModalProps extends DSDefaultProps {
	children: ReactNode
	id: string
	height?: string
	moveWindow: boolean
	onClose: () => void
	resizeWindow?: boolean
	title: string
	width?: string
}

export interface UseDSModalProps
	extends Pick<DSModalProps, "moveWindow" | "onClose"> {}
