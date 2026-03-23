import { ColorInput } from "../color-input"
import { ColorPreview } from "../color-preview"
import { GenerateButton } from "../generate-button"
import { Modal } from "../modal"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<ColorPreview />
				<ColorInput />
				<GenerateButton />
			</div>
		</Modal>
	)
}
