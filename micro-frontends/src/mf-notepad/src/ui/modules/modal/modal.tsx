import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { Navigation } from "../navigation"
import { Textarea } from "../textarea"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent = () => {
	const { translations, onCloseProgram } = useModal()

	return (
		<DSModal
			id="ma-notepad"
			moveWindow={true}
			onClose={onCloseProgram}
			title={translations.title}
			width="600px"
			height="400px"
		>
			<Navigation />
			<Textarea />
		</DSModal>
	)
}
