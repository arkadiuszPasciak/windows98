import type { MouseEvent } from "react"
import type { DSModalCursor } from "../ds-modal.type"

export interface ModalHeaderProps {
	id: string
	title: string
	onClose: () => void
	cursorType: DSModalCursor
	mouseDownEvent: (event: MouseEvent) => void
	mouseUpEvent: () => void
}
