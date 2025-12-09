import {
	type MouseEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react"
import { DSModalCursor, type UseDSModalProps } from "./ds-modal.type"
import { mouseDownEvent, mouseMoveEvent, mouseUpEvent } from "./helpers"

export const useDSModal = ({ moveWindow, onClose }: UseDSModalProps) => {
	const modalElement = useRef<HTMLDivElement>(null)
	const dialogRef = useRef<HTMLDialogElement>(null)
	const [mouseState, setMouseState] = useState(false)
	const [cursorType, setCursorType] = useState<DSModalCursor>(
		DSModalCursor.DEFAULT,
	)
	const [positionX, setPositionX] = useState(0)
	const [positionY, setPositionY] = useState(0)

	useEffect(() => {
		const dialog = dialogRef.current

		if (!dialog) return

		dialog.showModal()
	}, [])

	const mouseDown = useCallback(
		(event: MouseEvent) => {
			mouseDownEvent(
				event,
				// TODO: Fix - 'HTMLDivElement | null' is not assignable to type 'HTMLDivElement'.
				// @ts-expect-error
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
				// TODO: Fix - 'HTMLDivElement | null' is not assignable to type 'HTMLDivElement'.
				// @ts-expect-error
				modalElement,
				moveWindow,
				mouseState,
				positionX,
				positionY,
			)
		},
		[moveWindow, mouseState, positionX, positionY],
	)

	const closeModal = (): void => {
		dialogRef.current?.close()

		onClose()
	}

	return {
		modalElement,
		dialogRef,
		mouseDown,
		mouseUp,
		mouseMove,
		cursorType,
		closeModal,
	}
}
