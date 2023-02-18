<template>
  <div class="TicTacToeChoosePlayer">
    <UIText class="title">
      {{ t('TicTacToeBundle.choose-player') }}
    </UIText>
    <UIRadio
      class="radio-player-x"
      :name="choosePlayerRadioInputName"
      :checked="true"
      :model-value="ETicTacToeRadioPlayer.PLAYER_X"
      @update:model-value="ticTacToeStore.playerType = $event"
    >
      x
    </UIRadio>
    <UIRadio
      class="radio-player-o"
      :name="choosePlayerRadioInputName"
      :model-value="ETicTacToeRadioPlayer.PLAYER_O"
      @update:model-value="ticTacToeStore.playerType = $event"
    >
      o
    </UIRadio>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIRadio from '@Bundles/UIBundle/Components/UIRadio.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { ETicTacToeRadioPlayer } from '@Bundles/TicTacToeBundle/Supports/TicTacToe.supports'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'

  const { t } = useI18n()

  const choosePlayerRadioInputName = 'tic-tac-toc-choose-player-radio-input'
  const ticTacToeStore = useTicTacToeStore()
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeChoosePlayer.styles.scss';
</style>
