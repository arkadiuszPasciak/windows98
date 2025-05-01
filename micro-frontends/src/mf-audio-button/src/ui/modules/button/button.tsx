import {
	DSIconAudioButtonOff,
	DSIconAudioButtonOn,
} from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./button.module.scss"
import { useButton } from "./use-button.hook"

export const Button: FunctionComponent = observer(() => {
	const { isMuted, toggleSound } = useButton()

	return (
		<button
			className={styles.button}
			data-testid="ma-audio-button-button"
			type="button"
			onClick={toggleSound}
		>
			{isMuted && <DSIconAudioButtonOff />}
			{!isMuted && <DSIconAudioButtonOn />}
		</button>
	)
})
