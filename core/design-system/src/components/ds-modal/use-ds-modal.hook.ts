import { useEffect, useRef, useState } from "react"
import { DSModalCursor, type UseDSModalProps } from "./ds-modal.type"

export function useDSModal({ moveWindow }: UseDSModalProps) {
	const modalElement = useRef<HTMLDivElement | null>(null)
	const [mouseState, setMouseState] = useState(false)
	const [positionX, setPositionX] = useState(0)
	const [positionY, setPositionY] = useState(0)
	const [cursorType, setCursorType] = useState<DSModalCursor>(
		DSModalCursor.DEFAULT,
	)

	const mouseDownEvent = (event: React.MouseEvent) => {
		if (!modalElement.current || !moveWindow) {
			return
		}

		setCursorType(DSModalCursor.MOVE)
		setMouseState(true)
		setPositionX(modalElement.current.offsetLeft - event.clientX)
		setPositionY(modalElement.current.offsetTop - event.clientY)
	}

	const mouseUpEvent = () => {
		if (!moveWindow) {
			return
		}

		setMouseState(false)
		setCursorType(DSModalCursor.DEFAULT)
	}

	const mouseMove = (event: React.MouseEvent) => {
		if (!mouseState || !modalElement.current || !moveWindow) {
			return
		}

		modalElement.current.style.left = `${event.clientX + positionX}px`
		modalElement.current.style.top = `${event.clientY + positionY}px`
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handleMouseUp = () => mouseUpEvent()
		document.addEventListener("mouseup", handleMouseUp)
		return () => {
			document.removeEventListener("mouseup", handleMouseUp)
		}
	}, [])

	return { modalElement, mouseMove, mouseDownEvent, cursorType }
}
