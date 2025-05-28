import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { Tabs } from "../tabs"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent = () => {
	const { translations, onCloseProgram } = useModal()

	return (
		<DSModal
			id="mf-settings"
			moveWindow={true}
			onClose={onCloseProgram}
			title={translations.title}
			width="420px"
			height="415px"
		>
			<Tabs />
		</DSModal>
	)
}
