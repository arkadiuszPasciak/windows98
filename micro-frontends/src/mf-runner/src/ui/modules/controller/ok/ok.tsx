import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useOk } from "./use-ok.hook"

export const Ok: FunctionComponent = observer(() => {
	const { isDisabled, onClick, translations } = useOk()

	return (
		<DSButton
			disabled={isDisabled}
			id="mf-runner-controller-ok"
			onClick={onClick}
			text={translations.text}
		/>
	)
})
