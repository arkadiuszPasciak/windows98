import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useOk } from "./use-ok.hook"

export const Ok: FunctionComponent = observer(() => {
	const { onClick, translations } = useOk()

	return (
		<DSButton
			id="mf-shutdown-controller-ok"
			onClick={onClick}
			text={translations.text}
		/>
	)
})
