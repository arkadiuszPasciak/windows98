import type { FunctionComponent } from "react"
import { Pulpit } from "../modules/pulpit"
import { Wrapper } from "../modules/wrapper"
import type { PulpitViewProps } from "./pulpit.types"

export const PulpitView: FunctionComponent<PulpitViewProps> = (props) => {
	return (
		<Wrapper>
			<Pulpit {...props} />
		</Wrapper>
	)
}

// This is temporary, when I move my app to react I export as a react component and set programs in the app
const mockData = {
	items: [
		{
			name: "mf-pulpit.my-computer",
			icon: "mycomputer",
		},
		{
			name: "mf-pulpit.recycle",
			icon: "recycle",
		},
	],
}

export const PulpitViewWithMock: FunctionComponent = () => {
	return <PulpitView {...mockData} />
}
