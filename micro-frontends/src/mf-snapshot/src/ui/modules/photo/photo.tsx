import type { FunctionComponent } from "react"
import styles from "./photo.module.css"
import type { PhotoProps } from "./photo.type"
import { usePhoto } from "./use-photo.hook"

export const Photo: FunctionComponent<PhotoProps> = ({ imgSrc }) => {
	const { translations } = usePhoto()

	return (
		<div
			className={styles.outlet}
			data-testid="mf-snapshot-photo"
		>
			<img
				className={styles.image}
				width="100%"
				height={130}
				src={imgSrc}
				alt={translations.name}
			/>
		</div>
	)
}
