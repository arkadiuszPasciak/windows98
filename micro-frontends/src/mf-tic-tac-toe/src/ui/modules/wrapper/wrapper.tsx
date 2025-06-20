import type { FunctionComponent } from "react"
import { Modal } from "../modal"
import { Orchestrator } from "../orchestrator"

export const Wrapper: FunctionComponent = () => {
	return (
		<Modal>
			<Orchestrator />
		</Modal>
	)
}
