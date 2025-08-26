import type { FunctionComponent } from "react"
import { ConfigContextComponent, DomainContextComponent } from "../../context"
import { Wrapper } from "../../modules/wrapper"
import type { CaseConverterViewProps } from "./case-converter.type"

export const MFCaseConverter: FunctionComponent<CaseConverterViewProps> = ({
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
