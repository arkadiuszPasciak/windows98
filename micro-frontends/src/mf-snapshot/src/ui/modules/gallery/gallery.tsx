import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { Photo } from "../photo"
import styles from "./gallery.module.css"
import { useGallery } from "./use-gallery.hook"

export const Gallery: FunctionComponent = observer(() => {
	const { snapshotUrl } = useGallery()

	return (
		snapshotUrl && (
			<div
				className={styles.gallery}
				data-testid="mf-snapshot-gallery"
			>
				<Photo imgSrc={snapshotUrl} />
			</div>
		)
	)
})
