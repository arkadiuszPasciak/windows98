import {
	DSIconAudioButtonOff,
	DSIconAudioButtonOn,
} from "@windows98/design-system"
import { getClassNames } from "@windows98/toolkit"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./button.module.css"
import { useButton } from "./use-button.hook"

export const Button: FunctionComponent = observer(() => {
	const { isMuted, toggleSound } = useButton()

	return (
		<button
			className={getClassNames([styles.button])}
			data-testid="mf-audio-button-button"
			type="button"
			onClick={toggleSound}
		>
			{isMuted && <DSIconAudioButtonOff />}
			{!isMuted && <DSIconAudioButtonOn />}
		</button>
	)
})
