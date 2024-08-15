import { mediaPlayerVideos } from "@APP|Bundles/MediaPlayerBundle/Mocks/MediaPlayer.mocks"
import { defineStore } from "pinia"

export const useMediaPlayerStore = defineStore("media-player", {
	state: () => ({
		videoSrc: mediaPlayerVideos[0].url as string,
	}),
})
