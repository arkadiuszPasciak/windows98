import type { DSModalCursor } from "../ds-modal.type"

export interface ModalHeaderProps {
	title: string
	onClose: () => void
	cursorType: DSModalCursor
	mouseDownEvent: (event: React.MouseEvent) => void
}
