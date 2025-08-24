import type { FunctionComponent } from "react"
import {
	ConfigContextComponent,
	DomainContextComponent,
	VideoRefContextComponent,
} from "../../context"
import { Wrapper } from "../../modules/wrapper"
import type { WebcamViewProps } from "./webcam.type"

export const MFWebcam: FunctionComponent<WebcamViewProps> = ({
	onCloseProgram,
}) => {
	return (
		<ConfigContextComponent onCloseProgram={onCloseProgram}>
			<DomainContextComponent>
				<VideoRefContextComponent>
					<Wrapper />
				</VideoRefContextComponent>
			</DomainContextComponent>
		</ConfigContextComponent>
	)
}
