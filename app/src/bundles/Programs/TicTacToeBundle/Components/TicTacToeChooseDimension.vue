<template>
  <div class="TicTacToeChooseDimension">
    <UIText class="title">
      {{ t('TicTacToeBundle.choose-dimension') }}
    </UIText>
    <UIRadio
      class="radio-dimension-3x3"
      :name="ETicTacToeInputNames.CHOOSE_DIMENSION"
      :checked="true"
      :model-value="ETicTacToeRadioDimension.THREE_X_THREE"
      @update:model-value="($event) => (checkedRadioBoxes = $event)"
    >
      3 x 3
    </UIRadio>

    <!-- improve 6x6 and 9x9 in the future -->
    <template v-if="false">
      <UIRadio
        class="radio-dimension-6x6"
        :name="ETicTacToeInputNames.CHOOSE_DIMENSION"
        :model-value="ETicTacToeRadioDimension.SIX_X_SIX"
        @update:model-value="($event) => (checkedRadioBoxes = $event)"
      >
        6 x 6
      </UIRadio>
      <UIRadio
        class="radio-dimension-9x9"
        :name="ETicTacToeInputNames.CHOOSE_DIMENSION"
        :model-value="ETicTacToeRadioDimension.NINE_X_NINE"
        @update:model-value="($event) => (checkedRadioBoxes = $event)"
      >
        9 x 9
      </UIRadio>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
	ETicTacToeInputNames,
	ETicTacToeRadioDimension,
	type TTicTacToeRadioDimension,
} from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import UIRadio from "@APP|Bundles/UIRadioBundle/Components/UIRadio.vue"
import UIText from "@APP|Bundles/UITextBundle/Components/UIText.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const checkedRadioBoxes = ref<TTicTacToeRadioDimension>(
	ETicTacToeRadioDimension.THREE_X_THREE,
)
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeChooseDimension.styles.scss"
/>
