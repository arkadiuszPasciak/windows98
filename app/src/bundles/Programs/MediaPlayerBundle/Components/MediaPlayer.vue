<template>
  <UIModal
    class="MediaPlayer"
    :title="t('MediaPlayer.title')"
    :resize-window="false"
    width="330px"
    height="275px"
    :modal-state="programStore.modalMediaPlayer"
    @close-modal="closeModal"
  >
    <div class="content">
      <MediaPlayerVideo :src="mediaPlayerStore.videoSrc" />
      <MediaPlayerControls />
      <MediaPlayerInformation />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"
import { useMediaPlayerStore } from "@APP/src/bundles/Programs/MediaPlayerBundle/Stores/MediaPlayer.stores"
import MediaPlayerControls from "@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerControls.vue"
import MediaPlayerInformation from "@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerInformation.vue"
import MediaPlayerVideo from "@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerVideo.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const programStore = useProgramStore()
const mediaPlayerStore = useMediaPlayerStore()

const closeModal = (): void => {
	programStore.updateMediaPlayerModal(false)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/MediaPlayerBundle/Styles/MediaPlayer.styles.scss"
/>
