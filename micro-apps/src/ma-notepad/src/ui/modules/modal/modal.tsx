import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent = () => {
	const { translations } = useModal()

	return (
		<DSModal
			id="ma-notepad"
			moveWindow={true}
			onClose={() => {}}
			title={translations.text}
		>
			123
		</DSModal>
	)
}
