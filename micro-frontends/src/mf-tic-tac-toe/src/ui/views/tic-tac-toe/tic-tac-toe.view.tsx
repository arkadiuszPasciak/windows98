import type { FunctionComponent } from "react"
import { DomainContextComponent } from "../../context/domain.context"
import { Wrapper } from "../../modules/wrapper"

export const TicTacToeView: FunctionComponent = () => {
	return (
		<DomainContextComponent>
			<Wrapper />
		</DomainContextComponent>
	)
}
