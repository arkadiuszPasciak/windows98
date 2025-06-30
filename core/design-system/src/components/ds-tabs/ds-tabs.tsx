import { type FunctionComponent, createElement } from "react"
import styles from "./ds-tabs.module.scss"
import type { DSTabsProps } from "./ds-tabs.type"
import { useDSTabs } from "./use-ds-tabs.hook"

export const DSTabs: FunctionComponent<DSTabsProps> = ({
	id,
	tabs,
	className = "",
}) => {
	const { activeIndex, setActiveTab } = useDSTabs()

	return (
		<div
			className={`${styles.wrapper} ${className}`}
			data-testid={`${id}-tabs`}
		>
			<div
				className={styles.tabs}
				data-testid={`${id}-tabs-buttons`}
			>
				{tabs.map((tab, index) => (
					<button
						data-testid={`${id}-${tab.id}-tab-button`}
						key={`${id}-${tab.id}-tab-button`}
						className={`${styles.tab} ${index === activeIndex ? styles["tab-active"] : ""}`}
						type="button"
						onClick={() => setActiveTab(index)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div
				className={styles.content}
				data-testid={`${id}-tabs-content`}
			>
				{tabs.map((tab, index) => (
					<div
						key={`${id}-${tab.id}-content`}
						className={`${styles["content-tab"]} ${index === activeIndex ? styles["content-tab-active"] : ""}`}
						data-testid={`${id}-${tab.id}-tab-content`}
					>
						{createElement(tab.component)}
					</div>
				))}
			</div>
		</div>
	)
}
