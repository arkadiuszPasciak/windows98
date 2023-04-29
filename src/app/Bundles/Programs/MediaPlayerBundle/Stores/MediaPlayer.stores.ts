import { defineStore } from 'pinia'
import { mediaPlayerVideos } from '@Bundles/MediaPlayerBundle/Mocks/MediaPlayer.mocks'

export const useMediaPlayerStore = defineStore('media-player', {
  state: () => ({
    videoSrc: mediaPlayerVideos[0].url as string,
  }),
})
