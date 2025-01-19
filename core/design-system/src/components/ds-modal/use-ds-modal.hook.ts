import { type MouseEvent, useCallback, useRef, useState } from "react"
import { DSModalCursor, type UseDSModalProps } from "./ds-modal.type"
import { mouseDownEvent, mouseMoveEvent, mouseUpEvent } from "./helpers"

export const useDSModal = ({ moveWindow }: UseDSModalProps) => {
	const modalElement = useRef<HTMLDivElement>(null)
	const dialogRef = useRef<HTMLDialogElement>(null)
	const [mouseState, setMouseState] = useState(false)
	const [cursorType, setCursorType] = useState<DSModalCursor>(
		DSModalCursor.DEFAULT,
	)
	const [positionX, setPositionX] = useState(0)
	const [positionY, setPositionY] = useState(0)

	const mouseDown = useCallback(
		(event: MouseEvent) => {
			mouseDownEvent(
				event,
				modalElement,
				moveWindow,
				setCursorType,
				setMouseState,
				setPositionX,
				setPositionY,
			)
		},
		[moveWindow],
	)

	const mouseUp = useCallback(() => {
		mouseUpEvent(moveWindow, setMouseState, setCursorType)
	}, [moveWindow])

	const mouseMove = useCallback(
		(event: MouseEvent) => {
			mouseMoveEvent(
				event,
				modalElement,
				moveWindow,
				mouseState,
				positionX,
				positionY,
			)
		},
		[moveWindow, mouseState, positionX, positionY],
	)

	return {
		modalElement,
		dialogRef,
		mouseDown,
		mouseUp,
		mouseMove,
		cursorType,
	}
}
