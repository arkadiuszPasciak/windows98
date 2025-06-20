import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useEnterYourName } from "./use-enter-your-name.hook"

export const EnterYourName: FunctionComponent = observer(() => {
	const { translations, setPlayerName } = useEnterYourName()

	return (
		<DSInput
			id="mf-tic-tac-toe-starter-enter-your-name"
			initialValue=""
			labelName={translations.label}
			wrapperLayout="vertical"
			onChange={setPlayerName}
		/>
	)
})
