import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { CaseBox } from "../case-box"
import styles from "./cases.module.css"
import { useCases } from "./use-cases.hook"

export const Cases: FunctionComponent = observer(() => {
	const { cases } = useCases()

	return (
		<div className={styles.cases}>
			{cases.map((caseItem) => (
				<CaseBox
					key={`mf-case-converter-${caseItem.id}`}
					id={caseItem.id}
					inputValue={caseItem.inputValue}
					title={caseItem.title}
				/>
			))}
		</div>
	)
})
