import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "../navigation.module.css"
import { useOpenFile } from "./use-open-file.hook"

export const OpenFile: FunctionComponent = observer(() => {
	const { openFile, translations } = useOpenFile()

	return (
		<>
			<button
				className={styles.button}
				data-testid="mf-notepad-open-file-button"
				type="button"
				onClick={openFile}
			>
				{translations.button}
			</button>
		</>
	)
})
