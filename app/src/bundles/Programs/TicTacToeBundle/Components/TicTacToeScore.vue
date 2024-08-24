<template>
  <UIModal
    class="TicTacToeScore"
    :title="t('TicTacToeBundle.score')"
    :resize-window="false"
    :move-window="false"
    width="150px"
    height="100px"
    :modal-state="ticTacToeStore.game.scoreModal"
    @close-modal="closeModal"
  >
    <div class="content">
      <UIText class="title">
        {{
          getDescriptionByScoreResult(
            t,
            ticTacToeStore.game.status,
            ticTacToeStore.form.data.userName,
            ticTacToeStore.form.data.playerType,
          )
        }}
      </UIText>

      <UIButton @click="closeModal">
        {{ t('TicTacToeBundle.new-game') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { TicTacToeScore } from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeScore.services"
import { useTicTacToeStore } from "@APP/src/bundles/Programs/TicTacToeBundle/Stores/TicTacToe.stores"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UIText from "@APP|Bundles/UITextBundle/Components/UIText.vue"
import { useI18n } from "vue-i18n"

const ticTacToeStore = useTicTacToeStore()
const { t } = useI18n()

const { getDescriptionByScoreResult } = new TicTacToeScore()

const closeModal = () => {
	ticTacToeStore.restartGame()
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeScore.styles.scss"
/>
