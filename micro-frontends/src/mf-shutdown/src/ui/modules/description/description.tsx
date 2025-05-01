import { DSText } from "@windows98/design-system"
import styles from "./description.module.scss"
import { useDescription } from "./use-description"

export const Description = () => {
	const { translations } = useDescription()

	return (
		<div className={styles.description}>
			<img
				width="32"
				height="32"
				src="/icons/applications/mycomputer.png"
				alt=""
				data-test-id="mf-shutdown-description-icon"
			/>
			<DSText
				id="mf-shutdown-description-text"
				text={translations.description}
			/>
		</div>
	)
}
