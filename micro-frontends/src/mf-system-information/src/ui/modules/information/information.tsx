import type { FunctionComponent } from "react"
import styles from "./information.module.scss"
import { useInformation } from "./use-information.hook"

export const Information: FunctionComponent = () => {
	const { browserName, deviceType, operatingSystem, translations } =
		useInformation()

	return (
		<dl
			className={styles.information}
			data-testid="mf-system-information-information"
		>
			<dt className={styles.title}>{translations.deviceType}:</dt>
			<dd
				className={styles.text}
				data-testid="mf-system-information-device-type"
			>
				{deviceType}
			</dd>
			<dt className={styles.title}>{translations.browserName}:</dt>
			<dd
				className={styles.text}
				data-testid="mf-system-information-browser-name"
			>
				{browserName}
			</dd>
			<dt className={styles.title}>{translations.operatingSystem}:</dt>
			<dd
				className={styles.text}
				data-testid="mf-system-information-operating-system"
			>
				{operatingSystem}
			</dd>
		</dl>
	)
}
