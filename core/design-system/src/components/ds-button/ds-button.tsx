import { getClassNames } from "@windows98/toolkit"
import React, { type JSX } from "react"
import styles from "./ds-button.module.css"
import type { DSButtonProps } from "./ds-button.type"

export const DSButton = ({
	className = "",
	size = "medium",
	disabled = false,
	onClick,
	text,
	id,
	isTextVisible = true,
	iconLeft,
	iconRight,
}: DSButtonProps): JSX.Element => {
	return (
		<button
			aria-label={!isTextVisible ? text : undefined}
			className={getClassNames([styles.button, className])}
			data-size={size}
			data-testid={`${id}-button`}
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
