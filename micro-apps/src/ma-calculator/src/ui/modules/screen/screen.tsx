import type { FunctionComponent } from "react"
import { useScreen } from "./use-screen.hook"
import styles from "./screen.module.scss"
import { observer } from 'mobx-react-lite'

export const Screen: FunctionComponent = observer(() => {
	const { value } = useScreen()

	return (
		<span
			className={styles.screen}
			id="ma-calculator-screen"
		>
			{value ?? "ERROR"}
		</span>
	)
})
