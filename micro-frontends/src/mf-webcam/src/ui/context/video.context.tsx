import {
	type FunctionComponent,
	type ReactNode,
	createContext,
	useRef,
} from "react"

export type VideoRefContextType = {
	videoRef: React.RefObject<HTMLVideoElement | null>
}

export const VideoRefContext = createContext<VideoRefContextType | undefined>(
	undefined,
)

export const VideoRefContextComponent: FunctionComponent<{
	children: ReactNode
}> = ({ children }) => {
	const videoRef = useRef<HTMLVideoElement>(null)

	return (
		<VideoRefContext.Provider value={{ videoRef }}>
			{children}
		</VideoRefContext.Provider>
	)
}
