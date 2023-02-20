<template>
  <div class="TicTacToeChoosePlayer">
    <UIText class="title">
      {{ t('TicTacToeBundle.choose-player') }}
    </UIText>
    <UIRadio
      class="radio-player-x"
      :name="ETicTacToeInputNames.CHOOSE_PLAYER"
      :checked="true"
      :model-value="ETicTacToeRadioPlayer.PLAYER_X"
      @update:model-value="($event) => (checkedRadioBoxes = $event)"
    >
      x
    </UIRadio>
    <UIRadio
      class="radio-player-o"
      :name="ETicTacToeInputNames.CHOOSE_PLAYER"
      :model-value="ETicTacToeRadioPlayer.PLAYER_O"
      @update:model-value="($event) => (checkedRadioBoxes = $event)"
    >
      o
    </UIRadio>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIRadio from '@Bundles/UIBundle/Components/UIRadio.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import {
    ETicTacToeInputNames,
    ETicTacToeRadioPlayer,
    TTicTacToeRadioPlayer,
  } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

  const { t } = useI18n()
  const checkedRadioBoxes = ref('player-x') as Ref<TTicTacToeRadioPlayer>
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeChoosePlayer.styles.scss';
</style>
