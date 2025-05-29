import type { FunctionComponent } from "react"
import { Domain } from "../../context"
import { Config } from "../../context/config.context"
import { Wrapper } from "../../modules/wrapper"
import type { RunnerViewProps } from "./runner.type"

export const MFRunner: FunctionComponent<RunnerViewProps> = ({
	onRunProgram,
	programs,
}) => {
	return (
		<Config
			onRunProgram={onRunProgram}
			programs={programs}
		>
			<Domain>
				<Wrapper />
			</Domain>
		</Config>
	)
}
