import type { FunctionComponent } from "react"
import { HomeView } from "../../views"
import useMainContainer from "./use-main-container.hook"

export const MainContainer: FunctionComponent = () => {
	useMainContainer()

	return <HomeView />
}
