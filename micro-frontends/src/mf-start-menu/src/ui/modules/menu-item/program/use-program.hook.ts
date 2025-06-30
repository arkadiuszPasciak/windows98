import { useConfig } from "../../../hooks"
import { useMenuItem } from "../use-menu-item.hook"
import type { UseMenuItemProgram } from "./program.type"

export function useMenuItemProgram({ closeMenu, id }: UseMenuItemProgram) {
	const { configContext } = useConfig()
	const { translations } = useMenuItem({ id })

	const openProgram = (): void => {
		configContext.onRunProgram(id)

		if (closeMenu) closeMenu()
	}

	return {
		openProgram,
		translations,
	}
}
