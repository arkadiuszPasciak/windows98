import { MFStartMenu } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useStartMenu } from "./use-start-menu.hook"

export const StartMenu: FunctionComponent = () => {
	const { onRunProgram, programs } = useStartMenu()

	return (
		<MFStartMenu
			onRunProgram={onRunProgram}
			// @ts-ignore TODO: Fix type error
			menuItems={programs}
		/>
	)
}
