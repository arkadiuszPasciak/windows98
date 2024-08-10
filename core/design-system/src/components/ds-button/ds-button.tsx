import React from "react"
import styles from "./ds-button.module.scss"
import { DSButtonProps } from "./ds-button.type"

export const DSButton = ({
	size = "medium",
	disabled = false,
	onClick,
	text,
	isTextVisible = true,
	iconLeft,
	iconRight,
}: DSButtonProps): JSX.Element => {
	return (
		<button
			aria-label={!isTextVisible ? text : undefined}
			className={`${styles["ds-button"]} ${styles[`size-${size}`]}`}
			type="button"
			disabled={disabled}
			onClick={onClick}
		>
			{iconLeft}
			{isTextVisible && text}
			{iconRight}
		</button>
	)
}
