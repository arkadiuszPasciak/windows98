import type { FunctionComponent } from "react"
import { ProgramsPortal } from "../../../application/portal"
import { HomeView } from "../../views"
import useMainContainer from "./use-main-container.hook"

export const MainContainer: FunctionComponent = () => {
	useMainContainer()

	return (
		<>
			<HomeView />
			<ProgramsPortal />
		</>
	)
}
