<template>
  <UIModal
    class="MediaPlayer"
    :title="t('MediaPlayer.title')"
    :resize-window="false"
    :width="330"
    :height="275"
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
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import MediaPlayerControls from '@Bundles/MediaPlayerBundle/Components/MediaPlayerControls.vue'
  import MediaPlayerInformation from '@Bundles/MediaPlayerBundle/Components/MediaPlayerInformation.vue'
  import MediaPlayerVideo from '@Bundles/MediaPlayerBundle/Components/MediaPlayerVideo.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'
  import { useMediaPlayerStore } from '@Bundles/MediaPlayerBundle/Stores/MediaPlayer.stores'

  const { t } = useI18n()

  const programStore = useProgramStore()
  const mediaPlayerStore = useMediaPlayerStore()

  const closeModal = (): void => {
    programStore.updateMediaPlayerModal(false)
  }
</script>

<i18n src="@Bundles/MediaPlayerBundle/Locales/MediaPlayer.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayer.styles.scss';
</style>
