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
            ticTacToeStore.userName,
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
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { TicTacToeScore } from '@Bundles/TicTacToeBundle/Services/TicTacToeScore.services'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'

  const ticTacToeStore = useTicTacToeStore()
  const { t } = useI18n()

  const { getDescriptionByScoreResult } = new TicTacToeScore()

  const closeModal = () => {
    ticTacToeStore.restartGame()
  }
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeScore.styles.scss';
</style>
