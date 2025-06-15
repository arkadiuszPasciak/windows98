import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { usePlayerName } from "./use-player-name.hook"

export const PlayerName: FunctionComponent = observer(() => {
	const { translations, setPlayerName } = usePlayerName()

	return (
		<DSInput
			id="mf-tic-tac-toe-starter-player-name"
			initialValue=""
			labelName={translations.label}
			wrapperLayout="vertical"
			onChange={setPlayerName}
		/>
	)
})
