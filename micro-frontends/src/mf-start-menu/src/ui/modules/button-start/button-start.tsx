import { DSButton } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import type { ButtonStartProps } from "./button-start.type"
import { useButtonStart } from "./use-button-start.hook"

export const ButtonStart: FunctionComponent<ButtonStartProps> = ({
	onClick,
}) => {
	const { translations } = useButtonStart()

	return (
		<DSButton
			iconLeft={
				<img
					className="button-icon"
					width="23"
					height="23"
					src="/icons/programs/windows.png"
					alt={translations.buttonLogo}
				/>
			}
			id="mf-start-menu-start"
			onClick={onClick}
			text={translations.text}
		/>
	)
}
