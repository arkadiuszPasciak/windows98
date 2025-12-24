import { DSFrame } from "@windows98/design-system"
import { Fragment } from "react"
import styles from "./section.module.css"
import { useSection } from "./use-section.hook"

export const Section = () => {
	const { sections } = useSection()

	return sections?.map((section) => (
		<DSFrame
			key={section.name}
			id={`mf-system-information-section-${section.name}`}
			title={section.name}
			className={styles.section}
		>
			<dl
				className={styles.information}
				data-testid={`mf-system-information-section-${section.name}`}
			>
				{section.items.map((item) => (
					<Fragment key={item.label}>
						<dt
							className={styles.title}
							data-testid={`mf-system-information-section-${section.name}-${item.label}-label`}
						>
							{item.label}:
						</dt>
						<dd
							className={styles.text}
							data-testid={`mf-system-information-section-${section.name}-${item.label}-value`}
						>
							{item.value}
						</dd>
					</Fragment>
				))}
			</dl>
		</DSFrame>
	))
}
