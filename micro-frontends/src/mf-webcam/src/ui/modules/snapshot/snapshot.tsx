import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { MFSnapshot } from "../../../../../mf-snapshot/src/ui"
import { useSnapshot } from "./use-snapshot.hook"

export const Snapshot: FunctionComponent = observer(() => {
	const { videoRef, mediaStream } = useSnapshot()

	if (mediaStream && videoRef?.current) {
		return <MFSnapshot htmlVideoElement={videoRef.current} />
	}

	return null
})
