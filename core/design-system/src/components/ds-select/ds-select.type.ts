import { ReactEventHandler } from 'react'

export interface DSSelectProps {
  disabled?: boolean
  id: string
  labelName?: string
  labelPosition?: 'top' | 'left'
  modelValue: string | number
  options: Array<DSSelectOption>
  required?: boolean
  onSelect: ReactEventHandler<HTMLSelectElement>
}

export interface DSSelectOption {
  value: string | number
  name: string
}
