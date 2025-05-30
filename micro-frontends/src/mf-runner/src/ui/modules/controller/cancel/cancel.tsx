import { DSButton } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { useCancel } from "./use-cancel.hook"

export const Cancel: FunctionComponent = () => {
	const { onCancel, translations } = useCancel()

	return (
		<DSButton
			id="mf-runner-controller-cancel"
			text={translations.text}
			onClick={onCancel}
		/>
	)
}
