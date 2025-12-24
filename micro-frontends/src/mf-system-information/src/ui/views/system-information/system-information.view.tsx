import type { FunctionComponent } from "react"
import { ConfigComponent } from "../../context"
import { Wrapper } from "../../modules/wrapper"
import type { SystemInformationViewProps } from "./system-information.types"

export const MFSystemInformation: FunctionComponent<
	SystemInformationViewProps
> = ({ sections }) => {
	return (
		<ConfigComponent sections={sections}>
			<Wrapper />
		</ConfigComponent>
	)
}
