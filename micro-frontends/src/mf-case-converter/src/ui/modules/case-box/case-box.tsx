import { DSFrame, DSInput } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import styles from "./case-box.module.css"
import type { CaseBoxProps } from "./case-box.type"

export const CaseBox: FunctionComponent<CaseBoxProps> = ({
	id,
	inputValue,
	title,
}) => {
	return (
		<DSFrame
			className={styles.frame}
			id={`mf-case-converter-${id}`}
			title={title}
		>
			<DSInput
				id={`mf-case-converter-${id}-case`}
				initialValue={inputValue}
				wrapperLayout="vertical"
				readonly={true}
			/>
		</DSFrame>
	)
}
