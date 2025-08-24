import type { FunctionComponent } from "react"
import { ConfigContextComponent, DomainContextComponent } from "../../context"
import { Wrapper } from "../../modules/wrapper"
import type { SnapshotViewProps } from "./snapshot.type"

export const MFSnapshot: FunctionComponent<SnapshotViewProps> = ({
	htmlVideoElement,
}) => {
	return (
		<ConfigContextComponent htmlVideoElement={htmlVideoElement}>
			<DomainContextComponent>
				<Wrapper />
			</DomainContextComponent>
		</ConfigContextComponent>
	)
}
