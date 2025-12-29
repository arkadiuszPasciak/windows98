import type { FunctionComponent } from "react"
import { Section } from "../section"
import styles from "./wrapper.module.css"

export const Wrapper: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Section />
		</div>
	)
}
