import { useSnapshot } from "../../hooks"

export function useGallery() {
	const { domain } = useSnapshot()

	return {
		snapshotUrl: domain.snapshotUrl,
	}
}
