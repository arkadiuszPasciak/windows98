import type { DSDefaultProps } from "../../types/component.type"

export type DSIconIcons = {
  [key in DSIconNames]: JSX.Element
}

export type DSIconNames = "select-button" | "radio"

export interface DSIconProps extends DSDefaultProps {
  name: DSIconNames
}
