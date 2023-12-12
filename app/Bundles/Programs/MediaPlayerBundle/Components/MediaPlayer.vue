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
  import { useI18n } from 'vue-i18n'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'
  import MediaPlayerControls from '@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerControls.vue'
  import MediaPlayerInformation from '@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerInformation.vue'
  import MediaPlayerVideo from '@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerVideo.vue'
  import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'
  import { useMediaPlayerStore } from '@APP|Bundles/MediaPlayerBundle/Stores/MediaPlayer.stores'

  const { t } = useI18n()

  const programStore = useProgramStore()
  const mediaPlayerStore = useMediaPlayerStore()

  const closeModal = (): void => {
    programStore.updateMediaPlayerModal(false)
  }
</script>

<i18n
  src="@APP|Bundles/MediaPlayerBundle/Locales/MediaPlayer.locales.json"
></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/MediaPlayerBundle/Styles/MediaPlayer.styles.scss"
/>
