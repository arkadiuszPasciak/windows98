import { MFNavigation } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { AudioButton, Clock, StartMenu } from "../../components"

export const NavigationLayout: FunctionComponent = () => {
	return (
		<MFNavigation>
			<StartMenu />
			<AudioButton />
			<Clock />
		</MFNavigation>
	)
}
