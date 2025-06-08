import { useState } from "react"
import type { UseMenuItem } from "../menu-item.type"
import { useMenuItem } from "../use-menu-item.hook"

export function usePanelItemGroup({ id }: UseMenuItem) {
	const [isGroupHovered, setIsGroupHovered] = useState<boolean>(false)
	const { translations } = useMenuItem({ id })

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
		translations,
	}
}
