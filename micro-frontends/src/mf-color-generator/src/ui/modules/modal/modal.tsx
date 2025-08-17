import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import type { ModalProps } from "./modal.type"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent<ModalProps> = ({ children }) => {
	const { translations, onCloseProgram } = useModal()

	return (
		<DSModal
			id="mf-color-generator"
			moveWindow={true}
			onClose={onCloseProgram}
			title={translations.title}
			width="300px"
			height="200px"
		>
			{children}
		</DSModal>
	)
}
