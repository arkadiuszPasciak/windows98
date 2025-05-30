import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useInput } from "./use-input.hook"

export const Input: FunctionComponent = observer(() => {
	const { translations, setProgramName } = useInput()

	return (
		<DSInput
			id="mf-runner-input"
			initialValue=""
			labelName={translations.label}
			wrapperLayout="horizontal"
			onChange={setProgramName}
		/>
	)
})
