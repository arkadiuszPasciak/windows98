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
