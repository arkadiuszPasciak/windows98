import type { FunctionComponent } from "react"
import { ConfigContextComponent, DomainContextComponent } from "../../context"
import { Wrapper } from "../../modules/wrapper"
import type { MainViewProps } from "./main.type"

export const MFImageConverter: FunctionComponent<MainViewProps> = ({
	onCloseProgram,
}) => {
	return (
		<ConfigContextComponent onCloseProgram={onCloseProgram}>
			<DomainContextComponent>
				<Wrapper />
			</DomainContextComponent>
		</ConfigContextComponent>
	)
}
