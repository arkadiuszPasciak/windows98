import type { FunctionComponent } from "react"
import { Domain } from "../../context"
import { Config } from "../../context/config.context"
import { Wrapper } from "../../modules/wrapper"
import type { RunnerViewProps } from "./runner.type"

export const MFRunner: FunctionComponent<RunnerViewProps> = ({
	onCloseProgram,
	onRunProgram,
	programs,
}) => {
	return (
		<Config
			onCloseProgram={onCloseProgram}
			onRunProgram={onRunProgram}
			programs={programs}
		>
			<Domain>
				<Wrapper />
			</Domain>
		</Config>
	)
}
