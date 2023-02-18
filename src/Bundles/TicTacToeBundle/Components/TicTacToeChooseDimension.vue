<template>
  <div class="TicTacToeChooseDimension">
    <UIText class="title">
      {{ t('TicTacToeBundle.choose-dimension') }}
    </UIText>
    <UIRadio
      class="radio-dimension-3x3"
      :name="chooseDimensionRadioInputName"
      :checked="true"
      :model-value="ETicTacToeRadioDimension.THREE_X_THREE"
      @update:model-value="ticTacToeStore.dimensionType = $event"
    >
      3 x 3
    </UIRadio>
    <UIRadio
      class="radio-dimension-6x6"
      :name="chooseDimensionRadioInputName"
      :model-value="ETicTacToeRadioDimension.SIX_X_SIX"
      @update:model-value="ticTacToeStore.dimensionType = $event"
    >
      6 x 6
    </UIRadio>
    <UIRadio
      class="radio-dimension-9x9"
      :name="chooseDimensionRadioInputName"
      :model-value="ETicTacToeRadioDimension.NINE_X_NINE"
      @update:model-value="ticTacToeStore.dimensionType = $event"
    >
      9 x 9
    </UIRadio>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIRadio from '@Bundles/UIBundle/Components/UIRadio.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { ETicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToe.supports'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'

  const { t } = useI18n()

  const chooseDimensionRadioInputName =
    'tic-tac-toc-choose-dimension-radio-input'
  const ticTacToeStore = useTicTacToeStore()
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeChooseDimension.styles.scss';
</style>
