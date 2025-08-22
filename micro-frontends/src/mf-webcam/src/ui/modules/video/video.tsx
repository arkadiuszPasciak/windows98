import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useVideo } from "./use-video.hook"
import styles from "./video.module.css"

export const Video: FunctionComponent = observer(() => {
	const { videoRef } = useVideo()

	return (
		// biome-ignore lint/a11y/useMediaCaption: It's a test of the webcam
		<video
			className={styles.video}
			data-testid="mf-webcam-video"
			autoPlay
			height="100%"
			ref={videoRef}
			width="100%"
		/>
	)
})
