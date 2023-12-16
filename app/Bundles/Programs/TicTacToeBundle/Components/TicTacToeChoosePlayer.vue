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
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIRadio from '@APP|Bundles/UIRadioBundle/Components/UIRadio.vue'
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'
  import {
    ETicTacToeInputNames,
    ETicTacToeRadioPlayer,
    TTicTacToeRadioPlayer,
  } from '@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

  const { t } = useI18n()
  const checkedRadioBoxes = ref<TTicTacToeRadioPlayer>(
    ETicTacToeRadioPlayer.PLAYER_X,
  )
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeChoosePlayer.styles.scss"
/>
