import type { FunctionComponent } from "react"
import { useScreen } from "./use-screen.hook"
import styles from "./screen.module.scss"

export const Screen: FunctionComponent = () => {
	const { value } = useScreen()

	return (
		<span
			className={styles.screen}
			id="screen"
		>
			{value ?? "ERROR"}
		</span>
	)
}
