<template>
  <UIModal
    class="TicTacToe"
    :title="t('TicTacToeBundle.title')"
    :resize-window="false"
    width="300px"
    height="auto"
    :modal-state="programStore.modalTicTacToe"
    @close-modal="closeModal"
  >
    <div class="content">
      <TicTacToeFormStart />
      <TicTacToeGame />
      <TicTacToeScore />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIModalBundle/Components/UIModal.vue'
  import TicTacToeGame from '@Bundles/TicTacToeBundle/Components/TicTacToeGame.vue'
  import TicTacToeScore from '@Bundles/TicTacToeBundle/Components/TicTacToeScore.vue'
  import TicTacToeFormStart from '@Bundles/TicTacToeBundle/Components/TicTacToeFormStart.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'

  const { t } = useI18n()
  const programStore = useProgramStore()
  const ticTacToeStore = useTicTacToeStore()

  const closeModal = (): void => {
    ticTacToeStore.restartGame()

    programStore.updateTicTacToeModal(false)
  }
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/TicTacToeBundle/Styles/TicTacToe.styles.scss"
/>
