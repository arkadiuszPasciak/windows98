import type { FunctionComponent } from "react"
import styles from "./navigation.module.css"
import { OpenFile } from "./open-file"
import { SaveFile } from "./save-file"

export const Navigation: FunctionComponent = () => {
	return (
		<div
			className={styles.navigation}
			data-testid="mf-notepad-navigation"
		>
			<SaveFile />
			<OpenFile />
		</div>
	)
}
