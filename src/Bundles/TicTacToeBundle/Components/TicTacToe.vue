<template>
  <UIModal
    class="TicTacToe"
    :title="t('TicTacToeBundle.title')"
    :resize-window="false"
    :width="195"
    :height="220"
    :modal-state="programStore.modalTicTacToe"
    @close-modal="closeModal"
  >
    <div class="content">
      <TicTacToeChoosePlayer />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import TicTacToeChoosePlayer from '@Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateTicTacToeModal(false)
  }
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToe.styles.scss';
</style>
