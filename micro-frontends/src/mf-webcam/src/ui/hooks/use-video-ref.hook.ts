import { useContext } from "react"
import { VideoRefContext } from "../context"

export const useVideoRef = () => {
	const context = useContext(VideoRefContext)

	return context?.videoRef
}
