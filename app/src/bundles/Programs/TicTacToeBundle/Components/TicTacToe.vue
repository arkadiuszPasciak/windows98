<template>
  <UIModal
    class="TicTacToe"
    :title="t('TicTacToeBundle.title')"
    :resize-window="false"
    width="300px"
    height="auto"
    :modal-state="programs.ticTacToe"
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
import { useTicTacToeStore } from "@APP/src/bundles/Programs/TicTacToeBundle/Stores/TicTacToe.stores"
import { useProgramManager } from "@APP/src/configs/app/hooks"
import TicTacToeFormStart from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeFormStart.vue"
import TicTacToeGame from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeGame.vue"
import TicTacToeScore from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeScore.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const { runProgram, programs } = useProgramManager()
const ticTacToeStore = useTicTacToeStore()

const closeModal = (): void => {
	ticTacToeStore.restartGame()

	runProgram("ticTacToe", false)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToe.styles.scss"
/>
