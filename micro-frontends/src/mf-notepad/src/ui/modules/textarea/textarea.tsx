import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./textarea.module.css"
import { useTextarea } from "./use-textarea.hook"

export const Textarea: FunctionComponent = observer(() => {
	const { placeholderText, text, onChange } = useTextarea()

	return (
		<textarea
			className={styles.textarea}
			data-testid="mf-notepad-textarea"
			onChange={onChange}
			value={text}
			placeholder={placeholderText}
		/>
	)
})
