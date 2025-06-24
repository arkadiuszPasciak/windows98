import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import type { ModalProps } from "./modal.type"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent<ModalProps> = ({ children }) => {
	const { translations, onCloseProgram } = useModal()

	return (
		<DSModal
			id="mf-timer"
			moveWindow={true}
			onClose={onCloseProgram}
			title={translations.title}
			width="380px"
			height="230px"
		>
			{children}
		</DSModal>
	)
}
