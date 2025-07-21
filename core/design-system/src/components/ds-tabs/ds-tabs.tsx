import { getClassNames } from "@windows98/toolkit"
import { type FunctionComponent, createElement } from "react"

import styles from "./ds-tabs.module.css"
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
			className={getClassNames([styles.wrapper, className])}
			data-testid={`${id}-tabs`}
		>
			<div
				className={getClassNames([styles.tabs])}
				data-testid={`${id}-tabs-buttons`}
			>
				{tabs.map((tab, index) => (
					<button
						data-active={index === activeIndex}
						data-testid={`${id}-${tab.id}-tab-button`}
						key={`${id}-${tab.id}-tab-button`}
						className={getClassNames([styles.tab])}
						type="button"
						onClick={() => setActiveTab(index)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div
				className={getClassNames([styles.content])}
				data-testid={`${id}-tabs-content`}
			>
				{tabs.map((tab, index) => (
					<div
						key={`${id}-${tab.id}-content`}
						className={getClassNames([styles["content-tab"]])}
						data-active={index === activeIndex}
						data-testid={`${id}-${tab.id}-tab-content`}
					>
						{createElement(tab.component)}
					</div>
				))}
			</div>
		</div>
	)
}
