import type { ReactNode } from "react"
import type { DSDefaultProps } from "../../types"
import type { ModalNavigationItem } from "./modal-navigation"
import type { Tabs } from "./modal-tabs"

export enum DSModalCursor {
	DEFAULT = "default",
	MOVE = "move",
}

export interface DSModalProps extends DSDefaultProps {
	children: ReactNode
	id: string
	height?: string
	moveWindow: boolean
	navigation?: ModalNavigationItem[]
	onClose: () => void
	resizeWindow?: boolean
	tabs?: Tabs
	title: string
	width?: string
}

export interface UseDSModalProps
	extends Pick<DSModalProps, "moveWindow" | "onClose"> {}
