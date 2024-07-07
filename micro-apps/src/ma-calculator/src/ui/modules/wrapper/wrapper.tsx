import type { FunctionComponent } from "react"
import { useWrapper } from "./use-wrapper.hook"
import styles from "./wrapper.module.scss"
import { Screen } from "../screen"
import { Keypad } from "../keypad"

export const Wrapper: FunctionComponent = () => {
	const { title } = useWrapper()

	return (
		<div className={styles.wrapper}>
			{title}
			<Screen />
			<Keypad />
		</div>
	)
}
