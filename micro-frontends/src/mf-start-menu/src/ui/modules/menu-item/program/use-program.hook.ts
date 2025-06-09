import { useConfig } from "../../../hooks"
import type { UseMenuItem } from "../menu-item.type"
import { useMenuItem } from "../use-menu-item.hook"

export function useMenuItemProgram({ id }: UseMenuItem) {
	const { configContext } = useConfig()
	const { translations } = useMenuItem({ id })

	const openProgram = (): void => {
		configContext.onRunProgram(id)
	}

	return {
		openProgram,
		translations,
	}
}
