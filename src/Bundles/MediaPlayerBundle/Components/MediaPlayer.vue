<template>
  <UIModal
    class="MediaPlayer"
    :title="t('MediaPlayer.title')"
    :resize-window="false"
    :width="330"
    :height="180"
    :modal-state="programStore.modalMediaPlayer"
    @close-modal="closeModal"
  >
    <div class="content">
      <MediaPlayerVideo src="https://youtu.be/IW7Rqwwth84" />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import MediaPlayerVideo from '@Bundles/MediaPlayerBundle/Components/MediaPlayerVideo.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const { t } = useI18n()

  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateMediaPlayerModal(false)
  }
</script>

<i18n src="@Bundles/MediaPlayerBundle/Locales/MediaPlayer.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayer.styles.scss';
</style>
