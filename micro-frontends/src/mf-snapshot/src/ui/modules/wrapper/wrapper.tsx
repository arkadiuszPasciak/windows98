import { DSFrame } from "@windows98/design-system"
import { CapturePhoto } from "../capture-photo"
import { Gallery } from "../gallery"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<DSFrame
			id="mf-snapshot"
			className={styles.wrapper}
		>
			<CapturePhoto />
			<Gallery />
		</DSFrame>
	)
}
