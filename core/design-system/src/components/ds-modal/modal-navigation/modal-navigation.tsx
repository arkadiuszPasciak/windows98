import type { FunctionComponent } from "react"
import styles from "./modal-navigation.module.scss"
import type { ModalNavigationProps } from "./modal-navigation.type"

export const ModalNavigation: FunctionComponent<ModalNavigationProps> = ({
	id,
	navigation,
}) => {
	if (!navigation) return null

	return (
		<div
			className={styles.navigation}
			data-testid={`${id}-modal-navigation`}
		>
			{navigation?.map((item) => (
				<button
					className={styles["navigation-button"]}
					data-testid={`${id}-modal-navigation-button-${item.name}`}
					key={`${id}-modal-navigation-button-${item.name}`}
					onClick={item.onClick ?? undefined}
					type="button"
				>
					{item.name}
				</button>
			))}
		</div>
	)
}
