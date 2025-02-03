import type { FunctionComponent } from "react"
import styles from "./modal-tabs.module.scss"
import type { DSModalTabsProps } from "./modal-tabs.type"
import { useDSTabs } from "./use-modal-tabs.hook"

export const ModalTabs: FunctionComponent<DSModalTabsProps> = ({
	id,
	initialIndex = 0,
	tabs,
}) => {
	const { activeTab, setActiveTab } = useDSTabs({ initialIndex })

	return (
		<div
			className={styles.wrapper}
			data-testid={`${id}-modal-tabs`}
		>
			<div className={styles.tabs}>
				{tabs.map((tab, index) => (
					<button
						className={`${styles.tab} ${index === activeTab ? styles["active-tab"] : ""}`}
						data-testid={`${id}-modal-tabs-tab-${index}`}
						key={`${id}-modal-tabs-tab`}
						type="button"
						onClick={() => setActiveTab(index)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div className={styles.content}>
				{tabs.map((tab, index) => (
					<div
						className={`${styles["content-tab"]} ${index === activeTab ? styles["active-content-tab"] : ""}`}
						data-testid={`${id}-modal-tabs-content-${index}`}
						key={`${id}-modal-tabs-content`}
					>
						{tab.component}
					</div>
				))}
			</div>
		</div>
	)
}
