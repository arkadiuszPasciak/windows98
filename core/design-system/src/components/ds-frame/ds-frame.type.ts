import type { DSDefaultProps } from '../../types/component.type'

export interface DSFrameProps extends DSDefaultProps {
	title?: string
  	children: React.ReactNode
	id: string
}
