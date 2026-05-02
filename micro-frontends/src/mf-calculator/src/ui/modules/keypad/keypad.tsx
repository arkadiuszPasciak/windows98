import { getClassNames } from "@windows98/toolkit"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { OperationButton } from "../operation-button"
import styles from "./keypad.module.css"
import { useKeypad } from "./use-keypad.hook"

export const Keypad: FunctionComponent = observer(() => {
	const { buttons } = useKeypad()

	return (
		<div
			className={getClassNames([styles.keypad])}
			data-testid="mf-calculator-keypad"
		>
			{buttons.map((button) => (
				<OperationButton
					key={button.id}
					{...button}
				/>
			))}
		</div>
	)
})
