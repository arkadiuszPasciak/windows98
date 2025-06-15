import type { FunctionComponent } from "react"
import { ConfigContextComponent, DomainContextComponent } from "../../context"
import { Wrapper } from "../../modules/wrapper"
import type { TicTacToeViewProps } from "./tic-tac-toe.type"

export const MFTicTacToe: FunctionComponent<TicTacToeViewProps> = ({
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
