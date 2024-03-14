import type { DSDefaultProps } from "../../types/component.type"

export interface DSTextProps extends DSDefaultProps {
  text: string
  // @TODO: Add global ID type to toolkit and import here
  id: string | number
}
