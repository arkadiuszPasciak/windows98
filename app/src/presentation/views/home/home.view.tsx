import type { FunctionComponent } from "react"
import { PulpitLayout } from "../../layouts"
import { NavigationLayout } from "../../layouts/navigation/navigation.layout"

export const HomeView: FunctionComponent = () => {
	return (
		<div data-testid="app-home-view">
			<PulpitLayout />
			<NavigationLayout />
		</div>
	)
}
