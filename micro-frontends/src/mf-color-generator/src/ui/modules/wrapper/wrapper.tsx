import { ColorPreview } from "../color-preview"
import { GenerateButton } from "../generate-button"
import { HexInput } from "../hex-input"
import { Modal } from "../modal"
import { RgbInput } from "../rgb-input"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<ColorPreview />
				<HexInput />
				<RgbInput />
				<GenerateButton />
			</div>
		</Modal>
	)
}
