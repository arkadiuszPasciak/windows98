import { useState } from "react"

export function usePanelItemGroup() {
	const [isGroupHovered, setIsGroupHovered] = useState<boolean>(false)

	const handleMouseEnter = (): void => {
		setIsGroupHovered(true)
	}

	const handleMouseLeave = (): void => {
		setIsGroupHovered(false)
	}

	return {
		isGroupHovered,
		handleMouseEnter,
		handleMouseLeave,
	}
}
