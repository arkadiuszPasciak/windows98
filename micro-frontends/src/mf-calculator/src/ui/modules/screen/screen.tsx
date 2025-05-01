import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./screen.module.scss"
import { useScreen } from "./use-screen.hook"

export const Screen: FunctionComponent = observer(() => {
	const { value } = useScreen()

	return (
		<span
			className={styles.screen}
			data-testid="mf-calculator-screen"
		>
			{value ?? "ERROR"}
		</span>
	)
})
