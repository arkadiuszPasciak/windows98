export interface DSCheckboxProps {
	disabled?: boolean
	id: string
	initialChecked?: boolean
	name: string
	onChange: (checked: boolean) => void
	readonly: boolean
	text: string
}

export type useDSCheckboxProps = Pick<
	DSCheckboxProps,
	"initialChecked" | "onChange"
>
