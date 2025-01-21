import type { Dispatch, MouseEvent, RefObject, SetStateAction } from "react"
import { DSModalCursor } from "./ds-modal.type"

export const mouseDownEvent = (
	event: MouseEvent,
	modalElement: RefObject<HTMLDivElement>,
	moveWindow: boolean,
	setCursorType: Dispatch<SetStateAction<DSModalCursor>>,
	setMouseState: Dispatch<SetStateAction<boolean>>,
	setPositionX: Dispatch<SetStateAction<number>>,
	setPositionY: Dispatch<SetStateAction<number>>,
): void => {
	if (!modalElement.current || !moveWindow) {
		return
	}

	setCursorType(DSModalCursor.MOVE)
	setMouseState(true)
	setPositionX(modalElement.current.offsetLeft - event.clientX)
	setPositionY(modalElement.current.offsetTop - event.clientY)
}

export const mouseUpEvent = (
	moveWindow: boolean,
	setMouseState: Dispatch<SetStateAction<boolean>>,
	setCursorType: Dispatch<SetStateAction<DSModalCursor>>,
): void => {
	if (!moveWindow) {
		return
	}

	setMouseState(false)
	setCursorType(DSModalCursor.DEFAULT)
}

export const mouseMoveEvent = (
	event: MouseEvent,
	modalElement: RefObject<HTMLDivElement>,
	moveWindow: boolean,
	mouseState: boolean,
	positionX: number,
	positionY: number,
): void => {
	if (!mouseState || !modalElement.current || !moveWindow) {
		return
	}

	modalElement.current.style.left = `${event.clientX + positionX}px`
	modalElement.current.style.top = `${event.clientY + positionY}px`
}
