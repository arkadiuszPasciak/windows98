import { useConfig } from "../../hooks"
import type { UsePanelItem } from "./panel-item.type"

export function usePanelItemProgram({ id }: UsePanelItem) {
	const { configContext } = useConfig()

	const openProgram = (): void => {
		configContext.onRunProgram(id)
	}

	return {
		openProgram,
	}
}
