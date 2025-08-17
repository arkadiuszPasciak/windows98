import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./color-preview.module.css"
import { useColorPreview } from "./use-color-preview.hook"

export const ColorPreview: FunctionComponent = observer(() => {
	const { currentColor } = useColorPreview()

	return (
		<div
			className={styles["color-box"]}
			style={{ backgroundColor: currentColor.hex }}
			data-testid="mf-color-generator-color-preview-box"
		/>
	)
})
