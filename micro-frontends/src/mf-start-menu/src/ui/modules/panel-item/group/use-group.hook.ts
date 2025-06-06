import { useState } from "react"
import type { UsePanelItem } from "../panel-item.type"
import { usePanelItem } from "../use-panel-item.hook"

export function usePanelItemGroup({ id }: UsePanelItem) {
	const [isGroupHovered, setIsGroupHovered] = useState<boolean>(false)
	const { translations } = usePanelItem({ id })

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
