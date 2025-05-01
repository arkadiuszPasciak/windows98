import type { FunctionComponent } from "react"
import { Wrapper } from "../modules/wrapper"
import type { NavigationProps } from "./navigation.types"

export const NavigationView: FunctionComponent<NavigationProps> = ({
	children,
}) => {
	return <Wrapper>{children}</Wrapper>
}
