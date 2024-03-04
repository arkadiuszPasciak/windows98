import type { ReactEventHandler } from "react"
import type { DSDefaultProps } from "../../types/component.type"

export interface DSSelectProps extends DSDefaultProps {
  disabled?: boolean
  id: string
  labelName?: string
  labelPosition?: "top" | "left"
  modelValue: string | number
  options: Array<DSSelectOption>
  required?: boolean
  onSelect: ReactEventHandler<HTMLSelectElement>
}

export interface DSSelectOption {
  value: string | number
  name: string
}
