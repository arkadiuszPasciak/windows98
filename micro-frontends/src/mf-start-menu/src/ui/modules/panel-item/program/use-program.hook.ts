import { useConfig } from "../../../hooks"
import type { UsePanelItem } from "../panel-item.type"
import { usePanelItem } from "../use-panel-item.hook"

export function usePanelItemProgram({ id }: UsePanelItem) {
	const { configContext } = useConfig()
	const { translations } = usePanelItem({ id })

	const openProgram = (): void => {
		configContext.onRunProgram(id)
	}

	return {
		openProgram,
		translations,
	}
}
