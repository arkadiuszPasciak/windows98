import type { FunctionComponent } from "react"
import { useWrapper } from "./use-wrapper.hook"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	const { title } = useWrapper()

	return (
		<div className={styles.wrapper}>
			{title}
		</div>
	)
}
