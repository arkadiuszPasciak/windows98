import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./textarea.module.scss"
import { useTextarea } from "./use-textarea.hook"

export const Textarea: FunctionComponent = observer(() => {
	const { text, onChange } = useTextarea()

	return (
		<textarea
			className={styles.textarea}
			data-testid="ma-notepad-textarea"
			onChange={(event) => onChange(event.target.value)}
		>
			{text}
		</textarea>
	)
})
